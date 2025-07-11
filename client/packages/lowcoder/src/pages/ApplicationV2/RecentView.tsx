import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { trans } from "i18n";
import React, { useMemo } from "react";
import {
  folderElementsSelector,
  isFetchingFolderElements,
} from "@lowcoder-ee/redux/selectors/folderSelector";
import { HomeResKey, HomeResTypeEnum } from "@lowcoder-ee/types/homeRes";
import { canEditApp, canManageApp } from "lowcoder-sdk";
import { getUser } from "@lowcoder-ee/redux/selectors/usersSelectors";
import { HomeTableView } from "@lowcoder-ee/pages/ApplicationV2/HomeTableView";
import { SkeletonStyle } from "@lowcoder-ee/pages/ApplicationV2/HomeLayout";

export function RecentView() {
  const { "": elements } = useSelector(folderElementsSelector);
  const user = useSelector(getUser);
  const isFetching = useSelector(isFetchingFolderElements);

  const resList = useMemo(() => {
    return elements
      ?.flatMap((e) => (e.folder ? e.subApplications || [] : e))
      .map((e) => ({
        key: e.applicationId,
        id: e.applicationId,
        name: e.name,
        title: e.title,
        description: e.description,
        category: e.category,
        icon: e.image,
        type: HomeResTypeEnum[HomeResTypeEnum[e.applicationType] as HomeResKey],
        creator: e?.creatorEmail ?? e.createBy,
        lastModifyTime: e.lastModifyTime,
        isEditable: canEditApp(user, e),
        isManageable: canManageApp(user, e),
        isDeletable: canEditApp(user, e),
        isMarketplace: false,
        isLocalMarketplace: e.isLocalMarketplace,
      }));
  }, [elements, user]);

  return (
    <>
      <Helmet>
        {
          <title>
            {trans("productName")} {trans("home.recent")}
          </title>
        }
      </Helmet>
      {isFetching ? (
        <SkeletonStyle active paragraph={{ rows: 8, width: 648 }} title={false} />
      ) : (
        <HomeTableView resources={resList} isSortModify />
      )}
    </>
  );
}
