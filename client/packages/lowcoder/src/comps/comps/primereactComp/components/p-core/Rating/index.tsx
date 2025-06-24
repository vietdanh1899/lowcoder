import {
  booleanExposingStateControl,
  controlItem,
  eventHandlerControl,
  hiddenPropertyView,
  jsonControl,
  NameConfig,
  NameConfigHidden,
  numberExposingStateControl,
  Section,
  stringExposingStateControl,
  toJSONObject,
  withExposingConfigs,
} from "lowcoder-sdk";
import { UICompBuilder } from "comps/generators/uiCompBuilder";
import LabelWrapper from "../../../components/common/LabelWrapper";
import { Rating } from "primereact/rating";

export const defStaticProps = {};

let RatingCompBase = (function () {
  const childrenMap = {
    staticProps: jsonControl(toJSONObject, defStaticProps),
    value: numberExposingStateControl("value", undefined),
    label: stringExposingStateControl("label", ""),
    error: stringExposingStateControl("error", ""),
    caption: stringExposingStateControl("caption", ""),
    showCaption: booleanExposingStateControl("showCaption"),
    required: booleanExposingStateControl("required"),
    onEvent: eventHandlerControl([
      {
        label: "onChange",
        value: "change",
        description: "Triggers when Rating is changed.",
      },
    ]),
  };

  return new UICompBuilder(childrenMap, (props: any) => {
    return (
      <LabelWrapper
        label={props.label.value}
        required={props.required.value}
        error={props.error.value}
        caption={props.caption.value}
        showCaption={props.showCaption.value}
      >
        <Rating value={props.value.value} onChange={(e) => props.value.onChange(e.value)} />
      </LabelWrapper>
    );
  })
    .setPropertyViewFn((children: any) => {
      return (
        <>
          <Section name="Basic">
            {children.staticProps.propertyView({ label: "Static Props" })}
            {children.value.propertyView({ label: "Value" })}
          </Section>
          <Section name="Interaction">{hiddenPropertyView(children)}</Section>
          <Section name="Form">
            {children.label.propertyView({ label: "Label" })}
            {children.error.propertyView({ label: "Error" })}
            {children.caption.propertyView({ label: "Caption" })}
            {children.showCaption.propertyView({ label: "Show caption" })}
            {children.required.propertyView({ label: "Required" })}
          </Section>
          <Section name="Event">{children.onEvent.getPropertyView()}</Section>
          <Section name="Description">
            {controlItem(
              {},
              <ol className="text-sm p-0 m-0 mx-4">
                <li>Static Props area should contain only static props of Primereact Rating.</li>
                <li>
                  <a href="https://primereact.org/rating/" target="_blank">
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
export const exposingConfigs = [
  new NameConfig("staticProps"),
  new NameConfig("value"),
  new NameConfig("label"),
  new NameConfig("error"),
  new NameConfig("caption"),
  new NameConfig("showCaption"),
  new NameConfig("required"),
  NameConfigHidden,
];

export default withExposingConfigs(RatingCompBase, exposingConfigs);
