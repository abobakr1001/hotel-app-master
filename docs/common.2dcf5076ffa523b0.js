"use strict";(self.webpackChunkhotel_system=self.webpackChunkhotel_system||[]).push([[592],{9690:(p,d,i)=>{i.d(d,{L:()=>u});var s=i(5879),t=i(9862);let u=(()=>{class c{constructor(r){this._HttpClient=r}gitAllRooms(r){return this._HttpClient.get("/admin/rooms",{params:r})}gitRoomById(r){return this._HttpClient.get(`/admin/rooms/${r}`)}AddRoom(r){return this._HttpClient.post("/admin/rooms",r)}EditeRoom(r,a){return this._HttpClient.put(`/admin/rooms/${r}`,a)}deleteRoom(r,a){return this._HttpClient.delete(`/admin/rooms/${r}`,{body:{name:a}})}static#t=this.\u0275fac=function(a){return new(a||c)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},139:(p,d,i)=>{i.d(d,{e:()=>_});class s extends Error{}s.prototype.name="InvalidTokenError";var g=i(5879),r=i(9862),a=i(2787);let _=(()=>{class n{constructor(e,l){this._HttpClient=e,this._Router=l,null!==localStorage.getItem("userToken")&&this.getProfile()}getProfile(){let l=function c(n,o){if("string"!=typeof n)throw new s("Invalid token specified: must be a string");o||(o={});const e=!0===o.header?0:1,l=n.split(".")[e];if("string"!=typeof l)throw new s(`Invalid token specified: missing part #${e+1}`);let h;try{h=function u(n){let o=n.replace(/-/g,"+").replace(/_/g,"/");switch(o.length%4){case 0:break;case 2:o+="==";break;case 3:o+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(n){return decodeURIComponent(atob(n).replace(/(.)/g,(o,e)=>{let l=e.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}(o)}catch{return atob(o)}}(l)}catch(m){throw new s(`Invalid token specified: invalid base64 for part #${e+1} (${m.message})`)}try{return JSON.parse(h)}catch(m){throw new s(`Invalid token specified: invalid json for part #${e+1} (${m.message})`)}}(localStorage.getItem("userToken"));console.log(l),localStorage.setItem("userRole",l.role),localStorage.setItem("user_id",l._id)}onLogin(e){return this._HttpClient.post("/admin/users/login",e)}onResetPassword(e){return this._HttpClient.post("/portal/users/reset-password",e)}onForgotPassword(e){return this._HttpClient.post("/portal/users/forgot-password",e)}onRegister(e){return this._HttpClient.post("/portal/users",e)}myLogout(){localStorage.clear(),this._Router.navigateByUrl("/auth/login")}onUserChangePassword(e){return this._HttpClient.post("/admin/users/change-password",e)}onLogOut(){localStorage.clear()}static#t=this.\u0275fac=function(l){return new(l||n)(g.LFG(r.eN),g.LFG(a.F0))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},1709:(p,d,i)=>{i.d(d,{$i:()=>g,W_:()=>r,iI:()=>c});var s=i(5879),t=i(9862),u=i(9515);const c=/^[a-zA-Z]+[0-9]+$/,g=/^\d+$/;let r=(()=>{class a{constructor(n,o){this._HttpClient=n,this._TranslateService=o,this.textDirection="",o.onLangChange.subscribe(e=>{console.log(e.lang),this.lang=e.lang}),this._TranslateService.onLangChange.subscribe(e=>{this.textDirection="en"===e.lang?"ltr":"rtl"})}onChangelang(n){this._TranslateService.setDefaultLang(n),this._TranslateService.use(n),localStorage.setItem("lang",n),console.log(n)}getErrorMessageForPhoneNumber(n,o,e){return n.get(o)?.getError(e.required)?"Phone number is requierd":n.get(o)?.getError(e.pattern)?"Only digit number, and must be 11 numbers":""}getErrorMessageForCountry(n,o,e){return n.get(o)?.getError(e.required)?"Country is requierd":""}getErrorMessageforName(n,o,e){return n.get(o)?.getError(e.name)?"Name is requierd.":n.get(o)?.getError(e.pattern)?"The userName must contain characters and end with numbers without spaces.":""}getErrorMessageforPasswrod(n,o,e){return n.get(o)?.getError(e.required),n.get(o)?.getError(e.maxlength)?"MaxLength at max 20 characters long.":n.get(o)?.getError(e.minlength)?"MinLength at least 6 characters long.":n.get(o)?.getError(e.pattern)?"must include at least one lowercase letter, one uppercase letter, one digit, one special character":""}getAllRooms(){return this._HttpClient.get("/admin/rooms")}get(){return this._HttpClient.get("/admin/rooms")}gituserById(n){return this._HttpClient.get(`/portal/users/${n}`)}static#t=this.\u0275fac=function(o){return new(o||a)(s.LFG(t.eN),s.LFG(u.sK))};static#e=this.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},2637:(p,d,i)=>{i.d(d,{L:()=>u});var s=i(5879),t=i(9862);let u=(()=>{class c{constructor(r){this._HttpClient=r}getAllAds(r){return this._HttpClient.get("/portal/ads",r)}getAllRooms(r){return this._HttpClient.get("/portal/rooms/available",r)}getRoomById(r){return this._HttpClient.get(`/portal/rooms/${r}`)}saveFavRoom(r){return this._HttpClient.post("/portal/favorite-rooms",{roomId:r})}getRoomFav(){return this._HttpClient.get("/portal/favorite-rooms")}getAllRoomReviews(r){return this._HttpClient.get(`/portal/room-reviews/${r}`)}removeFromFav(r){return this._HttpClient.delete(`/portal/favorite-rooms/${r}`,{body:{roomId:r}})}static#t=this.\u0275fac=function(a){return new(a||c)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},990:(p,d,i)=>{i.d(d,{W:()=>c});var s=i(7700),t=i(5879),u=i(6814);let c=(()=>{class g{constructor(a,_){this.dialogRef=a,this.data=_}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(_){return new(_||g)(t.Y36(s.so),t.Y36(s.WI))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-delete-ads"]],decls:16,vars:1,consts:[[1,"p-4","px-5"],[1,"d-flex","flex-row-reverse"],[1,"myPointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-danger","fa-2x"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],["src","../../../../../../assets/images/Delete-image.png","alt",""],["ngClass","data.name.length==0?visually-hidden:d-block"],[1,"d-block"],[1,"horizontal-line"],["type","submit",1,"btn","btn-outline-danger","my-2",3,"mat-dialog-close"]],template:function(_,n){1&_&&(t.TgZ(0,"section",0)(1,"div",1)(2,"a",2),t.NdJ("click",function(){return n.onNoClick()}),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"h2",6)(7,"p"),t._uU(8,"Are you sure you want Delete this item ? "),t.qZA()(),t.TgZ(9,"p"),t._uU(10," If you are sure just click on delete it"),t.qZA(),t._UZ(11,"p",7),t.qZA(),t._UZ(12,"div",8),t.TgZ(13,"div",1)(14,"button",9),t._uU(15," Delete "),t.qZA()()()),2&_&&(t.xp6(14),t.Q6J("mat-dialog-close",n.data._id))},dependencies:[u.mk,s.ZT],styles:[".text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}"]})}return g})()},6563:(p,d,i)=>{i.d(d,{v:()=>r});var s=i(7700),t=i(5879),u=i(2787);const c=function(){return["/auth/signin"]},g=function(){return["/auth/signup"]};let r=(()=>{class a{constructor(n,o,e,l){this.dialogRef=n,this.data=o,this._MatDialog=e,this._Router=l}onNoClick(){this.dialogRef.close()}login(){this._Router.navigate(["/auth/login"]),this.dialogRef.close()}register(){this._Router.navigate(["/auth/register"]),this.dialogRef.close()}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(s.so),t.Y36(s.WI),t.Y36(s.uw),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-must-login"]],decls:16,vars:4,consts:[[1,"p-4"],[1,"container"],[1,"d-flex","justify-content-between","gap-5"],[1,"header-auth","logo","mb-0"],[1,"mt-2","mb-4"],[1,"h6"],[3,"click"],[1,"pointer","fa-regular","fa-circle-xmark","text-danger","fa-2x","position-absolute","top-0","right-0","my-4"],[1,"inputs-auth","my-3","d-flex","justify-content-around","flex-md-row","flex-column"],["type","submit",1,"btn","btn-outline-main","px-5",3,"routerLink","click"],["type","submit",1,"btn","btn-outline-main2","px-5",3,"routerLink","click"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Please register or sign in to continue."),t.qZA(),t.TgZ(6,"p",5),t._uU(7,"Login to put this in Favorites."),t.qZA()(),t.TgZ(8,"div")(9,"span",6),t.NdJ("click",function(){return e.onNoClick()}),t._UZ(10,"i",7),t.qZA()()(),t.TgZ(11,"div",8)(12,"button",9),t.NdJ("click",function(){return e.login()}),t._uU(13," Sign in "),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return e.register()}),t._uU(15," Sign up "),t.qZA()()()()),2&o&&(t.xp6(12),t.Q6J("routerLink",t.DdM(2,c)),t.xp6(2),t.Q6J("routerLink",t.DdM(3,g)))},dependencies:[u.rH],styles:[".main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border:aqua;padding:10px 5px;border-radius:5px}input[_ngcontent-%COMP%]{background-color:#f5f6f8!important}.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;border-radius:15px}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;cursor:pointer}.gray[_ngcontent-%COMP%]{color:#ababab}.light-blue[_ngcontent-%COMP%]{background-color:#203fc7}.text-light-blue[_ngcontent-%COMP%]{color:#203fc7}.border-light-blue[_ngcontent-%COMP%]{border:solid 1px rgb(32,63,199)}.card[_ngcontent-%COMP%]{width:500px!important}.font[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.text-dark-blue[_ngcontent-%COMP%]{color:#152c5b}.text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}"]})}return a})()}}]);