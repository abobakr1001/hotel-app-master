"use strict";(self.webpackChunkhotel_system=self.webpackChunkhotel_system||[]).push([[782],{4782:(_,s,a)=>{a.r(s),a.d(s,{CommentsModule:()=>T});var d=a(6814),g=a(2787),l=a(7700),t=a(5879),m=a(2296);let u=(()=>{class n{constructor(o,e){this.dialogRef=o,this.data=e}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.so),t.Y36(l.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-comments"]],decls:14,vars:0,consts:[[1,"container","py-3"],[1,"text-end","d-block","myPointer",3,"click"],[1,"fa-regular","fa-2x","fa-circle-xmark","text-danger"],[1,"text-center"],["src","../../../../../../assets/images/Delete-image.png","alt","",1,"w-25"],[1,"text-end"],["mat-button","",1,"btn",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"a",1),t.NdJ("click",function(){return i.onNoClick()}),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"h3"),t._uU(6,"Delete this Item ?"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"are you sure you want to delete this item ? if you are sure just click on delete"),t.qZA(),t._UZ(9,"hr"),t.qZA(),t.TgZ(10,"div",5)(11,"button",6),t.NdJ("click",function(){return i.onNoClick()}),t._UZ(12,"span"),t._uU(13,"Close"),t.qZA()()())},dependencies:[m.lW]})}return n})();var p=a(990),r=a(6311),h=a(617),f=a(3365);const C=[{path:"",component:(()=>{class n{constructor(o){this.dialog=o,this.length=50,this.pageSize=5,this.pageIndex=1,this.pageSizeOptions=[5,10,25],this.tableData=[]}ngOnInit(){}openViewAdsDialog(){this.dialog.open(u,{}).afterClosed().subscribe(e=>{console.log("The dialog was closed"),console.log(e)})}openDeleteAdsDialog(){this.dialog.open(p.W,{}).afterClosed().subscribe(e=>{console.log("The dialog was closed"),console.log(e)})}handlePageEvent(o){this.pageEvent=o,this.length=o.length,this.pageSize=o.pageSize,this.pageIndex=o.pageIndex}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.uw))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-comments"]],decls:51,vars:5,consts:[["id","addnewItem"],[1,"row","py-5"],[1,"col-8"],[1,"table"],[1,"col"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-primary"],["aria-label","Select page",3,"length","pageSize","pageIndex","pageSizeOptions","page"]],template:function(e,i){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Comments Table Details"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"You Can cheak all details"),t.qZA()()(),t.TgZ(7,"table",3)(8,"thead")(9,"tr")(10,"th",4),t._uU(11,"Room name"),t.qZA(),t.TgZ(12,"th",4),t._uU(13,"Price"),t.qZA(),t.TgZ(14,"th",4),t._uU(15,"Discount"),t.qZA(),t.TgZ(16,"th",4),t._uU(17,"Capacity"),t.qZA(),t.TgZ(18,"th",4),t._uU(19,"Active"),t.qZA(),t.TgZ(20,"th",4),t._uU(21,"Action"),t.qZA()()(),t.TgZ(22,"tbody")(23,"tr")(24,"td"),t._uU(25,"Maryem"),t.qZA(),t.TgZ(26,"td"),t._uU(27," 200 "),t.qZA(),t.TgZ(28,"td"),t._uU(29,"200"),t.qZA(),t.TgZ(30,"td"),t._uU(31,"01068100888"),t.qZA(),t.TgZ(32,"td"),t._uU(33,"maryemhaythamm@gmail.com"),t.qZA(),t.TgZ(34,"td")(35,"button",5)(36,"mat-icon"),t._uU(37,"more_horiz"),t.qZA()(),t.TgZ(38,"mat-menu",null,6)(40,"button",7),t.NdJ("click",function(){return i.openViewAdsDialog()}),t.TgZ(41,"mat-icon",8),t._uU(42,"visibility"),t.qZA(),t.TgZ(43,"span"),t._uU(44,"View"),t.qZA()(),t.TgZ(45,"button",7),t.NdJ("click",function(){return i.openDeleteAdsDialog()}),t.TgZ(46,"mat-icon",8),t._uU(47,"delete"),t.qZA(),t.TgZ(48,"span"),t._uU(49,"Delete"),t.qZA()()()()()()(),t.TgZ(50,"mat-paginator",9),t.NdJ("page",function(A){return i.handlePageEvent(A)}),t.qZA()()),2&e){const c=t.MAs(39);t.xp6(35),t.Q6J("matMenuTriggerFor",c),t.xp6(15),t.Q6J("length",i.length)("pageSize",i.pageSize)("pageIndex",i.pageIndex)("pageSizeOptions",i.pageSizeOptions)}},dependencies:[r.VK,r.OP,r.p6,m.RK,h.Hw,f.NW],styles:[".main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border:aqua;padding:10px 5px;border-radius:5px}input[_ngcontent-%COMP%]{background-color:#f5f6f8!important}.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;border-radius:15px}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;cursor:pointer}.gray[_ngcontent-%COMP%]{color:#ababab}.light-blue[_ngcontent-%COMP%]{background-color:#203fc7}.text-light-blue[_ngcontent-%COMP%]{color:#203fc7}.border-light-blue[_ngcontent-%COMP%]{border:solid 1px rgb(32,63,199)}.card[_ngcontent-%COMP%]{width:500px!important}.font[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.text-dark-blue[_ngcontent-%COMP%]{color:#152c5b}.text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}#addnewItem[_ngcontent-%COMP%]{background-color:#ededed74;margin:20px 10px;border-radius:20px;padding:5px 10px}"]})}return n})()}];let Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(C),g.Bz]})}return n})();var b=a(9035);let T=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.ez,Z,b.m]})}return n})()}}]);