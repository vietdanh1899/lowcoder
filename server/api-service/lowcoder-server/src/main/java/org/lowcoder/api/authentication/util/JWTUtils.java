package org.lowcoder.api.authentication.util;

import com.auth0.jwk.Jwk;
import com.auth0.jwk.JwkProvider;
import com.auth0.jwk.JwkProviderBuilder;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.lowcoder.domain.user.model.User;
import org.lowcoder.sdk.config.AuthProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.PublicKey;
import java.security.interfaces.RSAPublicKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
@Slf4j(topic = "JWTUtils")
public class JWTUtils {

    @Autowired
    private AuthProperties authProperties;

    private JwtParser jwtParser;

    private String base64EncodedSecret;

    private final String TOKEN_HEADER = "Authorization";
    private final String TOKEN_PREFIX = "Bearer ";
    private final Map<String, JwkProvider> jwkProviders = new HashMap<>();

    @PostConstruct
    public void setup() throws MalformedURLException {
        base64EncodedSecret = Encoders.BASE64.encode(authProperties.getApiKey().getSecret().getBytes());
        this.jwtParser = Jwts.parserBuilder().setSigningKey(base64EncodedSecret).build();
        for (String realm : authProperties.getKeycloak().getTenants()) {
            this.jwkProviders.put(realm, new JwkProviderBuilder(new URL(authProperties.getKeycloak().getUrl() + "/realms/" + realm + "/protocol/openid-connect/certs")).build());
        }
    }

    public DecodedJWT verifyToken(String token, String tenant) throws JWTVerificationException {
        try {
            if (token.isEmpty() || tenant.isEmpty()) {
                throw new JWTVerificationException("Token or tenant is empty");
            }
            DecodedJWT decodedJWT = JWT.decode(token);
            // Retrieve the public key using the token's kid
            Jwk jwk = jwkProviders.get(tenant).get(decodedJWT.getKeyId());
            PublicKey publicKey = jwk.getPublicKey();

            // Create algorithm with public key
            Algorithm algorithm = Algorithm.RSA256((RSAPublicKey) publicKey, null);

            // Build verifier with issuer check
            JWTVerifier verifier = JWT.require(algorithm).build();

            // Verify the token
            return verifier.verify(token);
        } catch (Exception e) {
            throw new JWTVerificationException("Token verification failed: " + e.getMessage());
        }
    }

    public String createToken(User user) {
        Claims claims = Jwts.claims()
                .setSubject(user.getId())
                .setIssuedAt(new Date());
        claims.put("userId", user.getId() );
        claims.put("createdBy", user.getName());
        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS256, base64EncodedSecret)
                .compact();
    }

    public Claims parseJwtClaims(String token) {
        try {
            return jwtParser.parseClaimsJws(token).getBody();
        } catch (Exception e) {
            log.warn("Failed to validate token. Exception: ", e);
            return null;
        }
    }

    public String resolveToken(ServerWebExchange exchange) {

        String bearerToken = exchange.getRequest().getHeaders().getFirst(TOKEN_HEADER);
        if (bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(TOKEN_PREFIX.length());
        }
        return null;
    }


}