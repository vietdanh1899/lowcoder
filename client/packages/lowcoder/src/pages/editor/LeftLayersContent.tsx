import { CompInfo, EditorContext } from "comps/editorState";
import {
  BaseSection,
  CollapseLabel as Label,
  CollapseTitle as Title,
  FoldedIcon,
  LeftCommon,
  ScrollBar,
  UnfoldIcon,
  LeftShow,
} from "lowcoder-design";
import React, { useCallback, useContext, useMemo, useState, useEffect, useRef } from "react";
import _, { get, set } from "lodash";
import styled from "styled-components";
import { leftCompListClassName } from "pages/tutorials/tutorialsConstant";
import type UIComp from "comps/comps/uiComp";
import { getTreeNodeByKey } from "util/objectUtils";
import { TopHeaderHeight } from "constants/style";
import { trans } from "i18n";
import { CompTree, IContainer } from "comps/comps/containerBase";
import { CompStateIcon } from "./editorConstants";
import type { UICompType } from "comps/uiCompRegistry";
import { DirectoryTreeStyle, Node } from "./styledComponents";
import { isAggregationApp } from "util/appUtils";
import cloneDeep from 'lodash/cloneDeep';
import { useDispatch } from "react-redux";
import { useApplicationId } from "util/hooks";
import { default as Button } from "antd/es/button";
import { default as Divider } from "antd/es/divider";
import { default as Dropdown } from "antd/es/dropdown";
import { default as Flex } from "antd/es/flex";
import { default as Input } from "antd/es/input";
import { default as Menu } from "antd/es/menu";
import { default as Space } from "antd/es/space";
import { default as Switch } from "antd/es/switch";
import { MenuProps } from "antd/es/menu";
import { InputRef, Tree, TreeProps } from "antd";
import {
  saveCollisionStatus,
} from "util/localStorageUtil";
import { default as DownOutlined } from "@ant-design/icons/DownOutlined";
import ThemeSettingsSelector from "components/ThemeSettingsSelector";
import { changeChildAction, deferAction, deleteCompAction, wrapChildAction } from "lowcoder-core";
import { addMapCompChildAction } from "lowcoder-sdk";
import { GridItemComp } from "@lowcoder-ee/comps/comps/gridItemComp";

export type DisabledCollisionStatus = "true" | "false"; // "true" means collision is not enabled - Layering works, "false" means collision is enabled - Layering does not work
export type ToggleCollisionStatus = (collisionStatus?: DisabledCollisionStatus) => void;

interface LeftLayersContentProps {
  uiComp: InstanceType<typeof UIComp>;
}

const DropdownLeftShow = () => (
  <LeftShow viewBox="0 0 256 256" /> // Setting custom viewBox
);

type NodeItem = {
  key?: string;
  title?: string;
  type?: UICompType;
  children: NodeItem[];
  pos?: number;
  disabled?: boolean;
  fixed?: boolean;
  comp?: any;
  allowDropChild?: boolean;
};

const items: MenuProps['items'] = [
  {
    label: 'Hide Component',
    key: 'hidden',
  },
  {
    label: 'Disable Component',
    key: 'disable',
  },
  {
    label: 'Margin',
    key: 'style.margin',
  },
  {
    label: 'Padding',
    key: 'style.padding',
  },
  {
    label: 'Font Size',
    key: 'style.textSize',
  },
  {
    label: 'Font Weight',
    key: 'style.textWeight',
  },
  {
    label: 'Font Family',
    key: 'style.fontFamily',
  },
  {
    label: 'Font Style',
    key: 'style.fontStyle',
  },
  {
    label: 'Text Transform',
    key: 'style.textTransform',
  },
  {
    label: 'Text Decoration',
    key: 'style.textDecoration',
  },
  {
    label: 'Border Radius',
    key: 'style.borderRadius',
  },
  {
    label: 'Border Width',
    key: 'style.borderWidth',
  },
  {
    label: 'Border Style',
    key: 'style.borderStyle',
  },
  {
    label: 'Background Image',
    key: 'style.backgroundImage',
  },
  {
    label: 'Background Image Repeat',
    key: 'style.backgroundImageRepeat',
  },
  {
    label: 'Background Image Size',
    key: 'style.backgroundImageSize',
  },
  {
    label: 'Background Image Position',
    key: 'style.backgroundImagePosition',
  },
  {
    label: 'Background Image Origin',
    key: 'style.backgroundImageOrigin',
  }
];

const LeftLayersContentWrapper = styled.div`
  height: calc(100vh - ${TopHeaderHeight});
`;

const CustomDropdown = styled(Dropdown)`
  .ant-dropdown-menu-item-icon {
    width: 14px !important;
    height: 14px !important; 
    max-width: 14px !important;
  }
`;

const getCheckedKeysInTree = (tree: NodeItem[], selectedCompNames: string[]): string[] => {
  return tree.reduce((acc: string[], node: NodeItem) => {
    if (selectedCompNames.includes(node.title || "")) {
      acc.push(node.key || "");
    }
    if (node.children) {
      acc = acc.concat(getCheckedKeysInTree(node.children, selectedCompNames));
    }
    return acc;
  }, []);
};

const findNodeByPos = (nodes: NodeItem[], pos: string): NodeItem => {
  const posArr = pos
    .split("-")
    .slice(1)
    .map((p) => Number(p));
  let currentNode = { children: nodes };
  for (let i = 0; i < posArr.length; i++) {
    currentNode = currentNode.children[posArr[i]];
  }
  return currentNode;
};

export const LeftLayersContent = (props: LeftLayersContentProps) => {
  const { uiComp } = props;
  const editorState = useContext(EditorContext);
  const [expandedKeys, setExpandedKeys] = useState<Array<React.Key>>([]);
  const dispatch = useDispatch();
  const applicationId = useApplicationId();

  // added by Falk Wolsky to support a Layers in Lowcoder
  const [collisionStatus, setCollisionStatus] = useState(editorState.getCollisionStatus());

  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [actionValue, setActionValue] = useState<string>("");
  const [selectedActionKey, setSelectedActionKey] = useState<string | null>(null);
  const [placeholderText, setPlaceholderText] = useState<string>("");
  // const [color, setColor] = useState<string>("");
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    saveCollisionStatus(collisionStatus);
  }, [collisionStatus])


  const handleActionSelection = useCallback((key: string) => {
    setSelectedActionKey(key);
  }, []);

  const handleToggleLayer = (checked: boolean) => {
    editorState.rootComp.children.settings.children.disableCollision.dispatchChangeValueAction(
      checked
    )
    setCollisionStatus(checked);
  }

  const getTree = (dslString: string, tree: CompTree, result: NodeItem[], key?: string) => {
    const { items, children } = tree;
    if (Object.keys(items).length) {
      for (const i in items) {
        const patternString = `{\\s*(?:[^{}]*?\\"i\\"\\s*:\\s*\\"${i}\\")[^{}]*?\\"pos\\"\\s*:\\s*(\\d+)[^{}]*?}`;
        const regex = new RegExp(patternString);

        // Execute the regex search
        const match = regex.exec(dslString);

        // Extract the 'pos' value if found
        let posValue = null;
        if (match !== null) {
          // match[0] is the full matched string
          // match[1] is the content of the first capturing group (\d+)
          const posValueStr = match[1];
          posValue = parseInt(posValueStr, 10); // Convert string to integer (base 10)
        }
        const info: NodeItem = {
          title: items[i].children.name.getView(),
          type: items[i].children.compType.getView() as UICompType,
          key: i,
          comp: items[i],
          allowDropChild: Boolean((items[i].children.comp as unknown as IContainer)?.realSimpleContainer?.()),
          pos: _.isNumber(posValue) ? posValue : undefined,
          children: [],
        };
        if (key) {
          const parent = getTreeNodeByKey(result, key);
          if (info.key?.includes("-")) parent.allowDropChild = false;
          parent.children = _.sortBy([...parent.children, info], "pos");
        } else {
          result.push(info);
        }
      }
    }
    if (Object.keys(children).length) {
      for (const i in children) {
        getTree(dslString, children[i], result, i);
      }
    }
    return _.sortBy(result, 'pos');
  };

  const uiCollapseClick = useCallback(
    (compName: string) => {
      editorState.setSelectedCompNames(new Set([compName]), "leftPanel");
    },
    [editorState]
  );

  const [componentTreeData, setComponentTreeData] = useState<NodeItem[]>([]);

  // update component tree data when editor state changes
  useEffect(() => {
    const compData = getTreeUIData();
    setComponentTreeData(compData);
  }, [editorState]);


  const getTreeUIData = () => {
    const tree = editorState.getUIComp().getTree();
    const dsl = editorState.rootComp.toJsonValue();
    const dslString = JSON.stringify(dsl);
    const explorerData: NodeItem[] = getTree(dslString, tree, []);

    return explorerData;
  }

  interface DropInfo {
    node: { key: string; pos: string };
    dragNode: { key: string; pos: string };
  }

  const handleDragEnter = (info: { node?: any; expandedKeys?: any; }) => {
    // Assuming 'info' has a property 'expandedKeys' which is an array of keys
    const { expandedKeys } = info;
    if (!expandedKeys.includes(info.node.key)) {
      setExpandedKeys(expandedKeys);
    }
  };

  const handleDrop: TreeProps<NodeItem>["onDrop"] = (info) => {
    if (info.dragNode.key.toString().includes("-")) return;
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = (info.node.pos as string).split("-");
    const dragPos = (info.dragNode.pos as string).split("-");
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

    const loop = (
      data: NodeItem[],
      key: React.Key,
      callback: (node: NodeItem, i: number, data: NodeItem[]) => void
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...componentTreeData];

    // Find dragObject
    let dragObj: NodeItem;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    let dropParentArray: NodeItem[] = [];
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
        dropParentArray = item.children;
      });
    } else {
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        dropParentArray = arr;
        i = index;
      });
      if (dropPosition === -1) {
        // Drop on the top of the drop node
        dropParentArray.splice(i!, 0, dragObj!);
      } else {
        // Drop on the bottom of the drop node
        dropParentArray.splice(i! + 1, 0, dragObj!);
      }
    }
    setComponentTreeData(data);

    const dragParentNodePos = dragPos.slice(0, -1).join("-");
    const dsl = editorState.rootComp.toJsonValue();
    const dragRealSimpleContainer =
      dragParentNodePos === "0"
        ? dsl.ui.compType === "module"
          ? editorState.rootComp.children.ui.getModuleLayoutComp()?.children.container
          : editorState.rootComp.children.ui
        : findNodeByPos(componentTreeData, dragParentNodePos).comp.children.comp.realSimpleContainer();

    // Same parent
    if ([dropPos.slice(0, -1).join("-"), dropPos.join("-")].includes(dragPos.slice(0, -1).join("-"))) {
      let layout: any = {};
      dropParentArray.forEach((data, index) => {
        layout[data.key!] = {
          ...dragRealSimpleContainer.children.layout.value[data.key!],
          pos: index,
        };
      });
      dragRealSimpleContainer.children.layout.dispatchChangeValueAction(layout);
    }
    // Different parent
    else {
      const dropParentNodePos = !info.dropToGap ? info.node.pos : dropPos.slice(0, -1).join("-");
      const dropRealSimpleContainer =
        dropParentNodePos === "0"
          ? dsl.ui.compType === "module"
            ? editorState.rootComp.children.ui.getModuleLayoutComp()?.children.container
            : editorState.rootComp.children.ui
          : findNodeByPos(componentTreeData, dropParentNodePos).comp.children.comp.realSimpleContainer();

      const dropDispatch = dropRealSimpleContainer.dispatch;
      const dropLayout = dropRealSimpleContainer.children.layout.value;

      const sourceDispatch = dragRealSimpleContainer.dispatch;
      const items = { [dragKey]: info.dragNode };
      const keys = Object.keys(items);

      const dragLayout = dragRealSimpleContainer.children.layout.value;

      // 1. Delete old Comp
      sourceDispatch(deferAction(changeChildAction("layout", _.omit(dragLayout, keys), true)));
      keys.forEach((key) =>
        sourceDispatch(deferAction(wrapChildAction("items", wrapChildAction(key, deleteCompAction()))))
      );
      // 2. Add a new Comp
      for (const [key, item] of Object.entries(items)) {
        if (item.comp) {
          dropDispatch(deferAction(wrapChildAction("items", addMapCompChildAction(key, item.comp))));
        }
      }
      let layout: any = {};
      dropParentArray.forEach((data, index) => {
        layout[data.key!] = {
          ...(dropLayout[data.key!] || dragLayout[data.key!]),
          pos: index,
        };
      });
      dropDispatch(deferAction(changeChildAction("layout", layout, true)));
    }
  };

  // here we handle the checked keys of the component tree

  const getPlaceholderText = useCallback((key: string) => {
    switch (key) {
      case 'hidden':
      case 'disable':
        return 'true | false';
      case 'style.border':
        return 'e.g., #ffffff'; // Example format indication
      case 'style.borderRadius':
      case 'style.radius': // Supporting legacy key if needed
        return 'e.g., 4px'; // Example format indication
      case 'style.borderWidth':
        return 'e.g., 2px'; // Example format indication
      case 'style.borderStyle':
        return 'solid | dashed | dotted';
      case 'style.backgroundImage':
        return 'URL as string';
      case 'style.backgroundImageRepeat':
        return 'repeat | repeat-x | repeat-y | no-repeat';
      case 'style.backgroundImageSize':
        return 'cover | contain | % | px';
      case 'style.backgroundImagePosition':
        return 'top | bottom | center | % | px';
      case 'style.backgroundImageOrigin':
        return 'padding-box | border-box | content-box';
      case 'style.margin':
      case 'style.padding':
        return 'e.g., 4px 8px 16px 32px'; // Example format indication
      case 'style.textSize':
        return 'e.g., 16px'; // Example format indication
      case 'style.textWeight':
        return 'bold | 900 | normal | 400';
      case 'style.fontFamily':
        return 'Arial, sans-serif';
      case 'style.fontStyle':
        return 'normal | italic | oblique';
      case 'style.textTransform':
        return 'none | capitalize | uppercase | lowercase';
      case 'style.textDecoration':
        return 'none | underline | overline | line-through';
      default:
        return 'Action Value';
    }
  }, []);

  const handleColorChange = (color: string | undefined, actionType: string) => {
    const newColor = color || '#ffffff';

    for (let key of getCheckedKeys()) {
      const node = getTreeNodeByKey(componentTreeData, key);
      const comp = editorState.getUICompByName(node.title);
      if(comp) {
        const { children } = comp.children.comp;
        const compType = comp.children.compType.getView();
        const types = actionType.split('.');
        if(types.length === 1) { // e.g hidden, disabled
          children[types[0]]?.dispatchChangeValueAction(color);
        }
        else if(types.length === 2) { // nested object e.g. style.background
          // (children[types[0]]);
          if (!children[types[0]]) {
            if (children[compType].children[types[0]]?.children[types[1]]) {
              children[compType].children[types[0]].children[types[1]]?.dispatchChangeValueAction(color);
            }
          }
          else {
            if (children[types[0]].children[types[1]]) {
              children[types[0]].children[types[1]]?.dispatchChangeValueAction(color);
            }
            else {
              children[types[0]][types[1]]?.dispatchChangeValueAction(color);
            }
          }
        }
      }
    }
  };

  // sync selected components with checked keys
  useEffect(() => {
    setCheckedKeys([]);
    const compTree = editorState.getUIComp().getTree();
    const dsl = editorState.rootComp.toJsonValue();
    const dslString = JSON.stringify(dsl);
    const explorerData: NodeItem[] = getTree(dslString, compTree, []);
    const selectedComponentsOnCanvas: string[] = getCheckedKeysInTree(explorerData, Array.from(editorState.selectedCompNames));
    setCheckedKeys(selectedComponentsOnCanvas);
  }, [editorState]);

  // make sure to handle the selectedActionKey for the changed input fields
  /* useEffect(() => {
    setActionValue('');
    // setColor('#ffffff');
  }, [selectedActionKey, placeholderText]); */

  const onCheck = (checkedKeys: any, e: any) => {
    setCheckedKeys(checkedKeys);
    const checkedComponents = new Set<string>();
    for (let key of e.checkedNodes){
      if (!key.key.includes("-")) checkedComponents.add(key.title);
    }
    editorState.setSelectedCompNames(checkedComponents, "leftPanel");
  }

  const getCheckedKeys = () => {
    return checkedKeys;
  }
  
  const getActionValue = () => {
    return actionValue;
  }

  const handleComponentsActions = useCallback((actionType: string) => {
    const value = getActionValue();
    for (let key of getCheckedKeys()) {
      const node = getTreeNodeByKey(componentTreeData, key);
      const comp = editorState.getUICompByName(node.title);
      if(comp) {
        const { children } = comp.children.comp;
        const compType = comp.children.compType.getView();
        const types = actionType.split('.');
        if(types.length === 1) { // e.g hidden, disabled
          children[types[0]]?.dispatchChangeValueAction(value);
        }
        else if(types.length === 2) { // nested object e.g. style.background
          // console.log(children[types[0]]);
          if (!children[types[0]]) {
            if (children[compType].children[types[0]]?.children[types[1]]) {
              children[compType].children[types[0]].children[types[1]]?.dispatchChangeValueAction(value);
            }
          }
          else {
            if (children[types[0]].children[types[1]]) {
              children[types[0]].children[types[1]]?.dispatchChangeValueAction(value);
            }
            else {
              children[types[0]][types[1]]?.dispatchChangeValueAction(value);
            }
          }
        }
      }
    }
  }, [getActionValue, getCheckedKeys]);
  
  const getTreeUI = () => {
    // here the components get sorted by name
    // TODO: sort by category
    // TODO: sort by Types etc.
    const uiCompInfos = _.sortBy(editorState.uiCompInfoList(), [(x) => x.name]);
    const isDraggable = editorState.getCollisionStatus();

    return (
      <>
      <div style={{margin:"0px 16px"}}>
        <div style={{marginBottom:"10px"}}>
 
          {trans("leftPanel.activatelayers")}
          <Switch 
            style={{margin : "0px 10px"}}
            size="small"
            defaultChecked={collisionStatus}
            disabled={false}
            onChange={(value: boolean) => {
              handleToggleLayer(value);
            }}
          />
        </div>

        <Tree
          showLine={true}
          allowDrop={({ dropNode, dropPosition }) => {
            if ((dropNode as NodeItem).comp instanceof GridItemComp)
              return dropPosition !== 0 || Boolean((dropNode as NodeItem).allowDropChild);
            // Group layout, allow drop child, not allow drop sibling
            else return dropPosition === 0;
          }}
          checkable={true}
          onCheck={onCheck}
          selectable={false}
          checkedKeys={checkedKeys}
          draggable={isDraggable}
          onDragEnter={handleDragEnter}
          onDrop={(info) => handleDrop(info)}
          treeData={componentTreeData}
          expandedKeys={expandedKeys}
          onExpand={(keys) => setExpandedKeys(keys)}
        />

        <div style={{margin:"10px 0px"}}> 
          <Flex gap="small" vertical>
            <CustomDropdown
              dropdownRender={() => (
                <Menu
                  items={items}
                  onClick={({ key }) => {
                    handleActionSelection(key);
                  }}
                />
              )}
            >
              <Button size={"small"}>
                <Space>Action <DownOutlined /></Space>
              </Button>
            </CustomDropdown>
            <Input
              ref={inputRef}
              value={actionValue}
              onChange={(e) => setActionValue(e.target.value)}
              placeholder={placeholderText}
            />
            <Button 
              type="primary"
              disabled={!selectedActionKey}
              onClick={() => selectedActionKey && handleComponentsActions(selectedActionKey)}
            >
              Apply Action
            </Button>
            <br/>
            <ThemeSettingsSelector
                themeSettingKey={"background"}
                name={trans("componentDoc.styleBackgroundColor")}
                color={"#ffffff"}
                configChange={(params) => handleColorChange(params.color, "style.background")}
            />
            <ThemeSettingsSelector
                themeSettingKey={"border"}
                name={trans("componentDoc.styleBorderColor")}
                color={"#ffffff"}
                configChange={(params) => handleColorChange(params.color, "style.border")}
            />
            <ThemeSettingsSelector
                themeSettingKey={"text"}
                name={trans("style.textColor")}
                color={"#ffffff"}
                configChange={(params) => handleColorChange(params.color, "style.text")}
            />
          </Flex>
        </div>
      </div>
     
      <Divider />
      </>
    );
  };

  const uiCollapse = useMemo(() => {
    if (isAggregationApp(editorState.getAppType())) {
      return;
    }
    return getTreeUI();
  }, [editorState, uiCollapseClick, expandedKeys, componentTreeData, actionValue]);
  
  const layerControlContent = (
    <ScrollBar>
      <div style={{ paddingBottom: 80 }}>
        <BaseSection name={trans("leftPanel.layers")} width={288} noMargin>
          <div className={leftCompListClassName}>{uiCollapse}</div>
        </BaseSection>
      </div>
    </ScrollBar>
  );

  return <LeftLayersContentWrapper className="cypress-left-content">{layerControlContent}</LeftLayersContentWrapper>;
  
};