import {controlItem, ControlPropertyViewWrapper} from "lowcoder-design";
import {ControlParams, MultiCompBuilder, ThemeContext, valueComp} from "lowcoder-sdk";
import Slider from "antd/es/slider";
import {useContext} from "react";

const childrenMap = {
  value: valueComp<number | null>(null),
};

const SliderControlTemp = new MultiCompBuilder(childrenMap, (props) => {
  const theme = useContext(ThemeContext);

  return props.value ?? Number(theme?.theme?.gridColumns) ?? 24;
}).build();

class SliderControl extends SliderControlTemp {
  propertyView(params: ControlParams) {
    // Save changes if old version not have grid columns num value
    if (this.getView() !== this.children.value.getView()) this.dispatchChangeValueAction({value: this.getView()})
    return controlItem({filterText: params.label}, <ControlPropertyViewWrapper {...params}>
      <Slider
        style={{width: "90%", margin: "8px 5% 0 5%"}}
        min={8}  // Define the minimum value for the slider
        max={54} // Define the maximum value for the slider
        value={this.getView()}
        onChange={(value) => this.dispatchChangeValueAction({value})} // this.dispatchChangeValueAction(value)}
      />
    </ControlPropertyViewWrapper>);
  }
}

export { SliderControl };
