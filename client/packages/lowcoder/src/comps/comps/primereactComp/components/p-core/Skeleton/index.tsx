import {
  controlItem,
  hiddenPropertyView,
  jsonControl,
  NameConfig,
  NameConfigHidden,
  Section,
  toJSONObject,
  withExposingConfigs,
} from "lowcoder-sdk";
import { UICompBuilder } from "comps/generators/uiCompBuilder";
import { Skeleton } from "primereact/skeleton";

export const defStaticProps = {
  shape: "circle",
  size: "2rem",
};

let SkeletonCompBase = (function () {
  const childrenMap = {
    staticProps: jsonControl(toJSONObject, defStaticProps),
  };

  return new UICompBuilder(childrenMap, (props: any) => {
    return <Skeleton {...props.staticProps} />;
  })
    .setPropertyViewFn((children: any) => {
      return (
        <>
          <Section name="Basic">{children.staticProps.propertyView({ label: "Static Props" })}</Section>
          <Section name="Interaction">{hiddenPropertyView(children)}</Section>

          <Section name="Description">
            {controlItem(
              {},
              <ol className="text-sm p-0 m-0 mx-4">
                <li>Static Props area should contain only static props of Primereact Skeleton.</li>
                <li>
                  <a href="https://primereact.org/skeleton/" target="_blank">
                    More information
                  </a>
                </li>
              </ol>
            )}
          </Section>
        </>
      );
    })
    .build();
})();
export const exposingConfigs = [new NameConfig("staticProps"), NameConfigHidden];

export default withExposingConfigs(SkeletonCompBase, exposingConfigs);
