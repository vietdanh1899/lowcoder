import { EditorContext } from "comps/editorState";
import { simpleMultiComp, stateComp, withViewFn } from "comps/generators";
import { withSimpleExposing } from "comps/generators/withExposing";
import { useContext, useEffect } from "react";
import { createI18n } from "react-simple-i18n";

let TransTempComp = withViewFn(
  simpleMultiComp({
    stateValue: stateComp<any>((s: any) => s),
  }),
  (comp) => {
    const { i18n: langObject, previewLanguage } = useContext(EditorContext)?.getAppSettings();

    useEffect(() => {
      if (langObject) {
        const i18n = createI18n(langObject as any, { lang: previewLanguage });
        comp.children.stateValue.dispatchChangeValueAction(i18n.t);
      }
    }, [JSON.stringify(langObject), previewLanguage]);

    return null;
  }
);

export let TransComp = withSimpleExposing(TransTempComp, (comp) => comp.children.stateValue.getView());
