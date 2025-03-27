import { useEffect, useRef } from "react";
import { mountMicroApp, Parcel } from "../micro-frontend";
import { useParams } from "react-router";

export default function MicroAppPage() {
  const domRef = useRef<HTMLDivElement>(null);
  const microAppRef = useRef<Parcel | null>(null);
  const { microAppName } = useParams<{ microAppName: string }>();

  useEffect(() => {
    if (!domRef.current || !microAppName) return;

    if (!microAppRef.current)
      mountMicroApp(microAppName, { domElement: domRef.current }).then(
        (parcel) => (microAppRef.current = parcel)
      );
    else microAppRef.current.update?.({});

    return () => {
      microAppRef.current?.unmount?.();
    };
  }, [microAppName]);

  return <div ref={domRef}></div>;
}
