import { asyncComponent } from '../utils/asyncComponent';

const Index = asyncComponent(() => import('../components/containers/index/Index'));
const Edit = asyncComponent(() => import('../components/containers/edit/edit'));
const More = asyncComponent(() => import('../components/containers/more/more'));
const Search = asyncComponent(() => import('../components/containers/search/search'));

const router = {
  'p/index.html': {
    mod: Index,
    title: '全部应用',
  },
  'p/edit.html': {
  	mod: Edit,
  	title: '我的应用编辑'
  },
  'p/more.html': {
  	mod: More,
  	title: '最近使用'
  },
  'p/search.html': {
  	mod: Search,
  	title: '搜索应用'
  }
};

export default router;
