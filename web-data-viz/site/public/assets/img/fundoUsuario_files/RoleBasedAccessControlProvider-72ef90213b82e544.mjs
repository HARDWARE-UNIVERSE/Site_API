(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[39395],{869899:(e,i,s)=>{s.r(i),s.d(i,{RoleBasedAccessControlProvider:()=>h,useRoleBasedAccessControlContext:()=>A});var r=s(667294),a=s(425288),l=s(773285),t=s(784590),o=s(19121),n=s(389643),c=s(339363),u=s(70061);const d=e=>{const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&("object"!=typeof e[s]||null===e[s]||Array.isArray(e[s])?i[(0,u.Z)(s)]=e[s]:i[(0,u.Z)(s)]=d(e[s]));return i},f=(e,i)=>{const s=[];for(const l in e)l!==i&&s.push({id:l,...d(e[l])});const r=s.sort((({user:{businessName:e}},{user:{businessName:i}})=>e.localeCompare(i))),a=new Map;for(const l of r)a.set(l.id,l);return a},b={profiles:new Map,headerVisible:!1,orbacVisibility:!1,activeProfile:void 0,disableProfileChanger:!1},p=(e,i)=>{switch(i.type){case"LOAD_PROFILES":return{...e,profiles:i.payload};case"SET_ACTIVE_PROFILE":return{...e,activeProfile:i.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:i.payload};case"TOGGLE_ORBAC_VISIBILITY":return{...e,orbacVisibility:i.payload};case"TOGGLE_DISABLE_PROFILE_CHANGER":return{...e,disableProfileChanger:i.payload};default:return e}},_=e=>{const[i,s]=(0,r.useReducer)(p,b),a=(({dispatch:e,isEnabled:i,state:s})=>{const{orbacVisibility:a,disableProfileChanger:l,headerVisible:t}=s;return{changeProfile:(0,r.useCallback)((s=>{i&&e({type:"SET_ACTIVE_PROFILE",payload:s})}),[i,e]),toggleORBACVisibility:(0,r.useCallback)((s=>{i&&e({type:"TOGGLE_ORBAC_VISIBILITY",payload:null!=s?s:!a})}),[i,e,a]),toggleDisableProfileChanger:(0,r.useCallback)((s=>{i&&e({type:"TOGGLE_DISABLE_PROFILE_CHANGER",payload:null!=s?s:!l})}),[i,e,l]),toggleHeaderVisibility:(0,r.useCallback)((s=>{i&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:null!=s?s:!t})}),[i,e,t])}})({dispatch:s,isEnabled:e,state:i}),{activeProfile:l,orbacVisibility:t}=i;(0,r.useEffect)((()=>{const e=(0,c.qn)("orbacActiveProfile",!1);e&&s({type:"SET_ACTIVE_PROFILE",payload:e})}),[]),(0,r.useEffect)((()=>{const e=(0,c.qn)("orbacVisibilty",!1);e&&s({type:"TOGGLE_ORBAC_VISIBILITY",payload:e})}),[]),(0,r.useEffect)((()=>{(0,c.Nh)("orbacVisibility",t)}),[t]),(0,r.useEffect)((()=>{(0,c.Nh)("orbacActiveProfile",l)}),[l]);return{state:i,actions:a,receiveProfiles:(0,r.useCallback)(((e,i)=>{s({type:"LOAD_PROFILES",payload:f(e,i)})}),[s])}};var E=s(785893);const{Provider:y,useMaybeHook:A}=(0,a.Z)("RoleBasedAccessControlContext"),h=({children:e})=>{const{checkExperiment:i}=(0,l.F)(),s=(0,o.Z)(),a=Boolean(s.isAuth&&s.isPartner&&i("web_m10n_business_access_orbac_www").anyEnabled),{state:c,actions:u,receiveProfiles:d}=_(a),{activeProfile:f,headerVisible:b,profiles:p=[]}=c,A=p?Array.from(p.values()):[],h=(0,n.Z)(A),g=!!(s.isAuth&&A.length>0)&&h,I=s.isAuth?s.id:"",C=s.isAuth?s.username:"",{changeProfile:L,toggleORBACVisibility:P,toggleDisableProfileChanger:O,toggleHeaderVisibility:v}=u;(0,r.useEffect)((()=>{a&&("string"!=typeof h?f||L(I):L(h))}),[h,I,a,L,f]),(0,r.useEffect)((()=>{a&&(g&&!b&&v(!0),!g&&b&&v(!1))}),[v,g,a,b,p]);const{data:m}=(0,t.Z)(a?{name:"ApiResource",options:{url:"/vx/business_access/profiles/",disable_auth_failure_redirect:!0}}:null),R=null==m?void 0:m.profiles;let V;s&&s.isAuth&&c.activeProfile===s.id?V={id:s.id,permissions:["OWNER"],user:{username:C,businessName:s.fullName,imgUrl:s.imageSmallUrl}}:f&&c.profiles&&(V=c.profiles.get(f)),(0,r.useEffect)((()=>{R&&d(R,I)}),[d,R,I]);const B=c.profiles?Array.from(c.profiles.values()):[];return(0,E.jsx)(y,{value:{profiles:B,headerVisible:c.headerVisible,activeProfile:V,changeProfile:L,toggleORBACVisibility:P,toggleDisableProfileChanger:O,toggleHeaderVisibility:v},children:e})}},389643:(e,i,s)=>{s.d(i,{Z:()=>n});var r=s(616550),a=s(53987),l=s(773285),t=s(19121),o=s(350118);const n=e=>{var i,s,n,c;const u=(0,r.useLocation)(),d=(0,t.Z)(),f=(0,o.S6)(),{anyEnabled:b}=(0,l.F)().checkExperiment("web_m10n_business_access_orbac_www"),p=(0,r.useRouteMatch)("/:username"),_=null==p||null===(i=p.params)||void 0===i?void 0:i.username,E=(0,r.useRouteMatch)("/pin/:id"),y=!(null==E||null===(s=E.params)||void 0===s||!s.id)&&(null===(n=f(E.params.id))||void 0===n||null===(c=n.pinner)||void 0===c?void 0:c.id);if((0,a.ej)(u))return!1;if((0,a.RU)(u))return!0;if((0,a.mY)(u))return b;const A=e.concat(d.isAuth?{user:{username:d.username},id:d.id}:{}).find((e=>{const{user:i={},id:s}=e||{},{username:r}=i;return!!(r&&_||y&&s)&&(r===_||y===s)}));return!!A&&A.id}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/RoleBasedAccessControlProvider-72ef90213b82e544.mjs.map