"use strict";(self.webpackChunkhotel_system=self.webpackChunkhotel_system||[]).push([[302],{302:(Q,f,r)=>{r.r(f),r.d(f,{RoomsModule:()=>D});var m=r(6814),d=r(2787),g=r(7700),t=r(5879);let C=(()=>{class i{constructor(o,e){this.dialogRef=o,this.data=e}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(g.so),t.Y36(g.WI))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-delete-room"]],decls:19,vars:2,consts:[[1,"p-4","px-5"],[1,"d-flex","flex-row-reverse"],[1,"myPointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-danger","fa-2x"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],["src","../../../../../../assets/images/Delete-image.png","alt",""],["ngClass","data.name.length==0?visually-hidden:d-block"],[1,"text-danger"],[1,"d-block"],[1,"horizontal-line"],["type","submit",1,"btn","btn-outline-danger","my-2",3,"mat-dialog-close"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"a",2),t.NdJ("click",function(){return n.onNoClick()}),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"h2",6)(7,"p"),t._uU(8,"are you sure you want Delete ("),t.TgZ(9,"span",7),t._uU(10),t.qZA(),t._uU(11,") ? "),t.qZA()(),t.TgZ(12,"p"),t._uU(13," if you are sure just click on delete it"),t.qZA(),t._UZ(14,"p",8),t.qZA(),t._UZ(15,"div",9),t.TgZ(16,"div",1)(17,"button",10),t._uU(18," Delete this item "),t.qZA()()()),2&e&&(t.xp6(10),t.hij("",n.data.roomNumber," "),t.xp6(7),t.Q6J("mat-dialog-close",n.data._id))},dependencies:[m.mk,g.ZT]})}return i})();var b=r(9690),y=r(9862);let _=(()=>{class i{constructor(o){this._HttpClient=o}gitAllFacilities(){return this._HttpClient.get("/admin/room-facilities")}static#t=this.\u0275fac=function(e){return new(e||i)(t.LFG(y.eN))};static#o=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var x=r(2425),p=r(6311),A=r(2296),v=r(617),T=r(3365);const O=function(i){return["edit",i]};function R(i,c){if(1&i){const o=t.EpF();t.TgZ(0,"tr",9)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",10),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",11)(13,"mat-icon"),t._uU(14,"more_horiz"),t.qZA()(),t.TgZ(15,"mat-menu",null,12)(17,"button",13)(18,"mat-icon",14),t._uU(19,"edit_square"),t.qZA(),t.TgZ(20,"span"),t._uU(21,"Edit"),t.qZA()(),t.TgZ(22,"button",15),t.NdJ("click",function(){const s=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.openDeleteRoomDialog(s))}),t.TgZ(23,"mat-icon",14),t._uU(24,"delete"),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Delete"),t.qZA()()()()()}if(2&i){const o=c.$implicit,e=t.MAs(16);t.xp6(2),t.Oqu(o.roomNumber),t.xp6(2),t.Q6J("src",o.images[0]||"../../../../../../../../assets/images/dummy.jpg",t.LSH),t.xp6(2),t.hij(" ",o.price," "),t.xp6(2),t.Oqu(o.discount),t.xp6(2),t.Oqu(o.capacity),t.xp6(2),t.Q6J("matMenuTriggerFor",e),t.xp6(5),t.Q6J("routerLink",t.VKq(7,O,o._id))}}let M=(()=>{class i{constructor(o,e,n,s,l){this._RoomsService=o,this.dialog=e,this._FacilitiesService=n,this._Router=s,this._ToastrService=l,this.searchKey="",this.length=20,this.pageSize=5,this.pageIndex=0,this.pageNumber=1,this.pageSizeOptions=[5,10,25],this.tableData=[],this.tableResponse=[],this.tableFacilities=[],this.tagId=0,this.facilitiesId=0,this.imagePath="https://upskilling-egypt.com:3000/",this.notFoundRecipes=""}ngOnInit(){this.getRooms(),this.getAllFacilities()}openAddAdsDialog(){throw new Error("Method not implemented.")}getRooms(){this._RoomsService.gitAllRooms({size:this.pageSize,page:this.pageNumber,_id:this.tagId>0?this.tagId:0}).subscribe({next:e=>{console.log(e.data.rooms),this.totalCount=e.data.totalCount,this.tableResponse=e.data.rooms,this.tableData=e.data}})}handlePageEvent(o){this.pageEvent=o,this.length=o.length,this.pageSize=o.pageSize,this.pageNumber=o.pageIndex,this.getRooms()}getAllFacilities(){this._FacilitiesService.gitAllFacilities().subscribe({next:o=>{console.log(o.data.facilities),this.tableFacilities=o.data.facilities},error:o=>{}})}addRoom(){this._Router.navigate(["/admin/rooms/add"])}openDeleteRoomDialog(o){console.log(o),this.dialog.open(C,{data:o}).afterClosed().subscribe(n=>{console.log(n),console.log("The dialog was closed"),console.log(o._id,o.roomNumber),n&&(console.log(n,o.roomNumber),this.deleteBooking(n,o.roomNumber)),console.log(o._id,o.roomNumber),console.log(n)})}deleteBooking(o,e){this._RoomsService.deleteRoom(o,e).subscribe({next:n=>{console.log(n)},error:n=>{},complete:()=>{this.getRooms(),console.log("completed"),this._ToastrService.info("Deleted Successfuly")}})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(b.L),t.Y36(g.uw),t.Y36(_),t.Y36(d.F0),t.Y36(x._W))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-rooms"]],decls:28,vars:4,consts:[["id","addnewItem"],[1,"row","pt-5","pb-2"],[1,"col-8"],[1,"col-4","text-end"],[1,"btn","light-blue","add-button","text-white",3,"click"],[1,"table","text-center"],[1,"col"],["class","align-items-center",4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSize","pageSizeOptions","page"],[1,"align-items-center"],["crossorigin","anonymous",1,"imgRooms",3,"src"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],[1,"text-primary"],["mat-menu-item","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Rooms Table Details"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"You Can cheak all details"),t.qZA()(),t.TgZ(7,"div",3)(8,"button",4),t.NdJ("click",function(){return n.addRoom()}),t._uU(9,"Add new Room"),t.qZA()()(),t.TgZ(10,"table",5)(11,"thead")(12,"tr")(13,"th",6),t._uU(14,"Room number"),t.qZA(),t.TgZ(15,"th",6),t._uU(16,"Image"),t.qZA(),t.TgZ(17,"th",6),t._uU(18,"Price"),t.qZA(),t.TgZ(19,"th",6),t._uU(20,"Discount"),t.qZA(),t.TgZ(21,"th",6),t._uU(22,"Capacity"),t.qZA(),t.TgZ(23,"th",6),t._uU(24,"Action"),t.qZA()()(),t.TgZ(25,"tbody"),t.YNc(26,R,27,9,"tr",7),t.qZA()(),t.TgZ(27,"mat-paginator",8),t.NdJ("page",function(l){return n.handlePageEvent(l)}),t.qZA()()),2&e&&(t.xp6(26),t.Q6J("ngForOf",n.tableResponse),t.xp6(1),t.Q6J("length",n.totalCount)("pageSize",n.pageSize)("pageSizeOptions",n.pageSizeOptions))},dependencies:[m.sg,d.rH,p.VK,p.OP,p.p6,A.RK,v.Hw,T.NW],styles:[".main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border:aqua;padding:10px 5px;border-radius:5px}input[_ngcontent-%COMP%]{background-color:#f5f6f8!important}.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;border-radius:15px}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;cursor:pointer}.gray[_ngcontent-%COMP%]{color:#ababab}.light-blue[_ngcontent-%COMP%]{background-color:#203fc7}.text-light-blue[_ngcontent-%COMP%]{color:#203fc7}.border-light-blue[_ngcontent-%COMP%]{border:solid 1px rgb(32,63,199)}.card[_ngcontent-%COMP%]{width:500px!important}.font[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.text-dark-blue[_ngcontent-%COMP%]{color:#152c5b}.text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}#addnewItem[_ngcontent-%COMP%]{background-color:#ededed74;margin:20px 10px;border-radius:20px;padding:5px 10px}.imgRooms[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:10px}.add-button[_ngcontent-%COMP%]{padding:10px 20px}"]})}return i})();var a=r(6223),P=r(1709),u=r(7680),h=r(4170),S=r(8525),U=r(3680);function F(i,c){if(1&i&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&i){const o=c.$implicit;t.Q6J("value",o._id),t.xp6(1),t.Oqu(o.name)}}function N(i,c){1&i&&(t.TgZ(0,"ngx-dropzone-label"),t._uU(1,"Drag and Drop image "),t.TgZ(2,"span",31),t._uU(3,"Choose image "),t.qZA(),t._uU(4,"to upload "),t.qZA())}function q(i,c){if(1&i&&(t.ynx(0),t._UZ(1,"img",33),t.BQk()),2&i){const o=c.$implicit;t.xp6(1),t.Q6J("src",o,t.LSH)}}function I(i,c){if(1&i&&(t.TgZ(0,"ngx-dropzone-label"),t.YNc(1,q,2,1,"ng-container",32),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.imgSrc)}}function z(i,c){1&i&&(t.TgZ(0,"ngx-dropzone-image-preview",34),t._UZ(1,"ngx-dropzone-label"),t.qZA()),2&i&&t.Q6J("file",c.$implicit)}let Z=(()=>{class i{constructor(o,e,n,s,l,Y,E){this._HelperService=o,this._RoomsService=e,this.dialog=n,this._Router=s,this._ActivatedRoute=l,this._FacilitiesService=Y,this._ToastrService=E,this.pageSize=5,this.pageIndex=1,this.roomId=0,this.tags=[],this.allFacilities=[],this.Categories=[],this.tagId=0,this.ids=0,this.facilities=0,this.files=[],this.onAddRoomMessag="",this.previewImg="",this.baseUrl='"http://res.cloudinary.com/dpa4yqvdv/image/upload/',this.defaultImg="../../../../../../assets/images/avatar.png",this.roomForm=new a.cw({roomNumber:new a.NI(null,[a.kI.required]),name:new a.NI(null,[a.kI.required]),price:new a.NI(null,[a.kI.required]),capacity:new a.NI(null,[a.kI.required]),discount:new a.NI(null,[a.kI.required]),facilities:new a.NI(null,[a.kI.required])}),this.roomId=l.snapshot.params.id}ngOnInit(){this.gitAllFacilities(),this.roomId&&this.getRoomById(this.roomId)}onSubmit(o){console.log(o.value),o.value.id=this.roomId;let e=new FormData;e.append("roomNumber",o.value.roomNumber),e.append("price",o.value.price),e.append("capacity",o.value.capacity);for(let n=0;n<this.imgSrc.length;n++)e.append("imgs",this.imgSrc[n],this.imgSrc[n].name);e.append("discount",o.value.discount);for(let n=0;n<o.value.facilities.length;n++)e.append("facilities",o.value.facilities[n]);this.roomId?this.editeRoom(e):this.addRoom(e)}addRoom(o){this._RoomsService.AddRoom(o).subscribe({next:e=>{this.onAddRoomMessag=e.message,console.log(e.message)},error:e=>{this._ToastrService.error("error !")},complete:()=>{this._ToastrService.success("Added Successfully"),this._Router.navigate(["/admin/rooms"])}})}editeRoom(o){this._RoomsService.EditeRoom(this.roomId,o).subscribe({next:e=>{this.onAddRoomMessag=e.message,console.log(e.message)},error:e=>{this._ToastrService.error("error !")},complete:()=>{this._ToastrService.success("Updated Successfully"),this._Router.navigate(["/admin/rooms"])}})}getRoomById(o){this._RoomsService.gitRoomById(o).subscribe({next:e=>{this.roomData=e.data.room,console.log(e.data.room)},error:()=>{},complete:()=>{this.imgSrc=this.roomData.images,this.roomForm.patchValue({roomNumber:this.roomData.roomNumber,price:this.roomData.price,capacity:this.roomData.capacity,discount:this.roomData.discount,facilities:this.roomData.facilities.map(e=>e._id)})}})}onSelect(o){console.log(o),this.files.push(...o.addedFiles),this.imgSrc=this.files,console.log(this.files),console.log(this.imgSrc)}onRemove(o){console.log(o),this.files.splice(this.files.indexOf(o),1)}goToRecipe(){this._Router.navigate(["/dashboard/admin/recipes"])}gitAllFacilities(){this._FacilitiesService.gitAllFacilities().subscribe({next:o=>{console.log(o),this.allFacilities=o.data.facilities}})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(P.W_),t.Y36(b.L),t.Y36(g.uw),t.Y36(d.F0),t.Y36(d.gz),t.Y36(_),t.Y36(x._W))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-rooms"]],decls:50,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"row","py-5"],[1,"col-9","mx-auto"],[1,"input-group","mb-3","custom-input"],["id","basic-addon1",1,"input-group-text","px-3","py-3"],[1,"fa-solid","fa-hashtag"],[1,"y-line","my-auto"],["type","text","placeholder","Room Number","aria-label","roomNumber","aria-describedby","basic-addon1","formControlName","roomNumber",1,"form-control","rounded-end","py-1"],[1,"d-flex","gap-4"],[1,"fa-solid","fa-money-bill"],["type","text","placeholder","Price","aria-label","price","aria-describedby","basic-addon1","formControlName","price",1,"form-control","rounded-end","py-1"],[1,"fa-solid","fa-warehouse"],["type","number","placeholder","capacity","aria-label","capacity","aria-describedby","basic-addon1","formControlName","capacity",1,"form-control","rounded-end","py-1"],[1,"d-flex","gap-3"],[1,"d-flex","align-items-center","justify-content-between","w-50"],[1,"fa-solid","fa-money-bill-trend-up","rotate-180"],["type","text","placeholder","Discount","aria-label","discount","aria-describedby","basic-addon1","formControlName","discount",1,"form-control","rounded-end","py-1"],[1,"selectors","w-50"],["appearance","outline",1,"w-100"],["formControlName","facilities","multiple",""],[3,"value",4,"ngFor","ngForOf"],["matSuffix","","color","primary"],[1,"justify-content-center","align-items-center","col-9","mx-auto"],["required","",1,"col-12",3,"multiple","change"],[4,"ngIf"],["ngProjectAs","ngx-dropzone-preview","class","",5,["ngx-dropzone-preview"],3,"file",4,"ngFor","ngForOf"],[1,"horizontal-line","col-10","mx-auto","my-4"],[1,"col-9","mx-auto","d-flex","justify-content-end"],["routerLink","/admin/rooms",1,"mx-4","btn","text-light-blue","border-light-blue","px-5"],["type","submit",1,"main","px-4"],[3,"value"],[1,"fw-bold"],[4,"ngFor","ngForOf"],["alt","",3,"src"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],1,"",3,"file"]],template:function(e,n){1&e&&(t.TgZ(0,"section")(1,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit(n.roomForm)}),t.TgZ(2,"div",1)(3,"div",2)(4,"div")(5,"div",3)(6,"span",4),t._UZ(7,"i",5),t.qZA(),t._UZ(8,"div",6)(9,"input",7),t.qZA()(),t.TgZ(10,"div",8)(11,"div",3)(12,"span",4),t._UZ(13,"i",9),t.qZA(),t._UZ(14,"div",6)(15,"input",10),t.qZA(),t.TgZ(16,"div",3)(17,"span",4),t._UZ(18,"i",11),t.qZA(),t._UZ(19,"div",6)(20,"input",12),t.qZA()(),t.TgZ(21,"div",13)(22,"div",14)(23,"div",3)(24,"span",4),t._UZ(25,"i",15),t.qZA(),t._UZ(26,"div",6)(27,"input",16),t.qZA()(),t.TgZ(28,"div",17)(29,"mat-form-field",18)(30,"mat-label"),t._uU(31,"Facilities"),t.qZA(),t.TgZ(32,"mat-select",19)(33,"mat-option"),t._uU(34,"All"),t.qZA(),t.YNc(35,F,2,2,"mat-option",20),t.qZA(),t.TgZ(36,"mat-icon",21),t._uU(37,"storefront"),t.qZA()()()()(),t.TgZ(38,"div",22)(39,"ngx-dropzone",23),t.NdJ("change",function(l){return n.onSelect(l)}),t.YNc(40,N,5,0,"ngx-dropzone-label",24),t.YNc(41,I,2,1,"ngx-dropzone-label",24),t.YNc(42,z,2,1,"ngx-dropzone-image-preview",25),t.qZA()(),t._UZ(43,"div",26),t.TgZ(44,"div",27)(45,"div")(46,"button",28),t._uU(47,"cancel"),t.qZA(),t.TgZ(48,"button",29),t._uU(49,"save"),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.roomForm),t.xp6(34),t.Q6J("ngForOf",n.allFacilities),t.xp6(4),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("ngIf",!n.imgSrc),t.xp6(1),t.Q6J("ngIf",n.imgSrc),t.xp6(1),t.Q6J("ngForOf",n.files))},dependencies:[m.sg,m.O5,d.rH,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,u._f,u.NP,u.sv,h.KE,h.hX,h.R9,v.Hw,S.gD,U.ey],styles:[".main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border:aqua;padding:10px 5px;border-radius:5px}input[_ngcontent-%COMP%]{background-color:#f5f6f8!important}.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;border-radius:15px}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;cursor:pointer}.gray[_ngcontent-%COMP%]{color:#ababab}.light-blue[_ngcontent-%COMP%]{background-color:#203fc7}.text-light-blue[_ngcontent-%COMP%]{color:#203fc7}.border-light-blue[_ngcontent-%COMP%]{border:solid 1px rgb(32,63,199)}.card[_ngcontent-%COMP%]{width:500px!important}.font[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.text-dark-blue[_ngcontent-%COMP%]{color:#152c5b}.text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.horizontal-line[_ngcontent-%COMP%]{height:2px;border-radius:20px;background-color:#00000012}"]})}return i})();const k=[{path:"",component:M},{path:"add",component:Z,title:"add"},{path:"edit/:id",component:Z,title:"edit"}];let w=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(k),d.Bz]})}return i})();var J=r(9035);let D=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[m.ez,w,J.m]})}return i})()}}]);