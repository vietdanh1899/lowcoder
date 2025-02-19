import { SimpleComp } from "lowcoder-core";
import {
  CompNameContext,
  controlItem,
  ControlNode,
  ControlParams,
  JSONValueControl,
  jsonValueControl,
} from "lowcoder-sdk";
import { ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Resizable, ResizeCallbackData } from "react-resizable";
import Handle from "@lowcoder-ee/layout/handler";
import { Button, Modal } from "antd";
import { FormatPainterOutlined, FullscreenOutlined } from "@ant-design/icons";
import { BoolControl } from "comps/controls/boolControl";
import { getFormatter } from "@lowcoder-ee/base/codeEditor/autoFormat";

const jsxFormatter = getFormatter("javascript", "Function") ?? (async (s) => s);

const OpenCodeLayout = ({
  code,
  onChange: dispatchCodeChange,
  label,
}: {
  code: string;
  onChange: any;
  label?: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const draggableRef = useRef<HTMLDivElement>(null!);
  const [size, setSize] = useState({ width: 500, height: 400 });
  const compName = useContext(CompNameContext);
  const valueRef = useRef<string>(code);
  const [value, setValue] = useState<string>(valueRef.current);
  const onChange = useCallback(
    (val: string) => {
      valueRef.current = val; // Update ref instead of state to avoid unnecessary re-renders
      dispatchCodeChange(val);
    },
    [dispatchCodeChange]
  );

  useEffect(() => {
    setValue(code);
  }, [compName]);

  const showModal = () => {
    setOpen(true);
  };

  const onResize = (event: any, { size }: ResizeCallbackData) => {
    setSize({ width: size.width, height: size.height });
  };

  return (
    <>
      <Button icon={<FullscreenOutlined />} onClick={showModal}>
        {label ?? "Open Code Layout Editor"}
      </Button>
      <Modal
        styles={{ content: { height: "100%" } }}
        mask={false}
        footer={null}
        open={open}
        maskClosable={false}
        title={
          <div style={{ display: "flex", justifyContent: "space-between", marginRight: "15px" }}>
            <div className="handle" style={{ cursor: "move" }}>
              {label ?? "Code layout"}: {compName}
            </div>
            <Button
              icon={<FormatPainterOutlined />}
              onClick={async () => {
                setValue(code);
                const formatedCode = await jsxFormatter(code);
                setValue(formatedCode);
                onChange(formatedCode);
              }}
            >
              Format Code
            </Button>
          </div>
        }
        onCancel={() => setOpen(false)}
        modalRender={(modal) => (
          <Draggable nodeRef={draggableRef} handle=".handle">
            <div ref={draggableRef} style={{ width: size.width + "px", height: size.height + "px" }}>
              <Resizable
                width={size.width}
                height={size.height}
                onResize={onResize}
                handle={Handle}
                minConstraints={[500, 400]}
                resizeHandles={["s", "n", "w", "e", "sw", "nw", "se", "ne"]}
              >
                {modal}
              </Resizable>
            </div>
          </Draggable>
        )}
      >
        <CodeMirror
          autoFocus={true}
          basicSetup={{ autocompletion: true }}
          value={value}
          height={size.height - 70 + "px"}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </Modal>
    </>
  );
};

export class CodeLayoutControl extends SimpleComp<string> {
  override getDefaultValue() {
    return `import _ from "lodash";

export default function App({ items, input }) {
  const children = _.values(items);

  return <div>{children}</div>;
}
`;
  }

  getPropertyView() {
    return this.propertyView({});
  }

  propertyView(params: ControlParams) {
    return controlItem(
      { filterText: params.label },
      <OpenCodeLayout
        label={params.label}
        code={this.value}
        onChange={(x: string) => this.dispatchChangeValueAction(x)}
      />
    );
  }
}

export type CodeLayoutChildrenType = {
  enableCodeLayout: BoolControl;
  input: InstanceType<typeof JSONValueControl>;
  codeLayout: CodeLayoutControl;
};

export const CodeLayoutChildrenMap = {
  enableCodeLayout: BoolControl,
  input: jsonValueControl({}),
  codeLayout: CodeLayoutControl,
};

export function getCodeLayoutPropertyView(children: CodeLayoutChildrenType): ControlNode {
  const item = (
    <>
      {children.enableCodeLayout.propertyView({ label: "Enable Code Layout" })}
      {children.enableCodeLayout.getView() && (
        <>
          {children.input.propertyView({ label: "Code Input" })}
          {children.codeLayout.propertyView({ label: "Code Layout" })}
        </>
      )}
    </>
  );

  return { ...item, __control__: true };
}
