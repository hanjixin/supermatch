import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazy from './LazyComponent';

// const Demo = () => import('views/Demo/Rematch');
const Activity = () => import('views/Activity/loadable');
const AutoComplete = () => import('views/base/AutoComplete');
const BreadcrumbCustom = () => import('views/base/BreadcrumbCustom');
const Imbibition = () => import('views/base/Imbibition');
const MosPagination = () => import('views/base/MosPagination');
const WaterProgress = () => import('views/base/WaterProgress');
const Daji = () => import('views/business/Daji');
const LayerPop = () => import('views/business/LayerPop');
const HoverButton = () => import('views/business/HoverButton');
const LinkageTree = () => import('views/business/LinkageTree');
const ModalTransfer = () => import('views/business/ModalTransfer');
const Ranking = () => import('views/business/Ranking');
const RichEdit = () => import('views/business/RichEdit');
const TreeTransfer = () => import('views/business/TreeTransfer');
const MicroAppsModule = () => import('../views/MicroApps/Module.js');
const NoMatch = () => import('../components/Layout/404.js');

const SubRoute = () => {
  return (
    <Switch>
      <Route path="/app/activity" component={lazy(Activity)} key="activity" exact />
      <Route path="/app/AutoComplete" component={lazy(AutoComplete)} key="demo" exact />
      <Route path="/app/BreadcrumbCustom" component={lazy(BreadcrumbCustom)} key="demo" exact />
      <Route path="/app/Imbibition" component={lazy(Imbibition)} key="demo" exact />
      <Route path="/app/WaterProgress" component={lazy(WaterProgress)} key="demo" exact />
      <Route path="/app/MosPagination" component={lazy(MosPagination)} key="demo" exact />
      <Route path="/app/Daji" component={lazy(Daji)} key="demo" exact />
      <Route path="/app/LayerPop" component={lazy(LayerPop)} key="demo" exact />
      <Route path="/app/HoverButton" component={lazy(HoverButton)} key="demo" exact />
      <Route path="/app/LinkageTree" component={lazy(LinkageTree)} key="demo" exact />
      <Route path="/app/ModalTransfer" component={lazy(ModalTransfer)} key="demo" exact />
      <Route path="/app/Ranking" component={lazy(Ranking)} key="demo" exact />
      <Route path="/app/RichEdit" component={lazy(RichEdit)} key="demo" exact />
      <Route path="/app/TreeTransfer" component={lazy(TreeTransfer)} key="demo" exact />
      <Route path="/micromodule/:url" component={lazy(MicroAppsModule)} key="demo"/>
      <Route component={lazy(NoMatch)} key="NoMatch"/>
    </Switch>
  );
};

export default SubRoute;
