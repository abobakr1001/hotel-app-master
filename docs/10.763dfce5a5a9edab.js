"use strict";(self.webpackChunkhotel_system=self.webpackChunkhotel_system||[]).push([[10],{2010:(U,u,i)=>{i.r(u),i.d(u,{RoomDetailsComponent:()=>v});var d=i(6814),e=i(6223),g=i(9035),p=i(3680),a=i(8034),l=i(4170),c=i(2787),o=i(5879),_=i(2267),b=i(2425),Z=i(2296),f=i(9515);function h(s,A){if(1&s&&(o.TgZ(0,"div",59),o._UZ(1,"img",60),o.qZA()),2&s){const n=A.$implicit;o.xp6(1),o.Q6J("src",n,o.LSH)}}let v=(()=>{class s{constructor(n,t,r,m,O){this.fb=n,this._roomDetailsService=t,this._ActivatedRoute=r,this._Router=m,this._Toastr=O,this.roomId=0,this.roomImages=[],this.createdBy="",this.roomNumber="",this.reviewsForm=new e.cw({roomId:new e.NI,rating:new e.NI,review:new e.NI}),this.commentForm=new e.cw({roomId:new e.NI,comment:new e.NI}),this.bookingForm=new e.cw({startDate:new e.NI,endDate:new e.NI,room:new e.NI,totalPrice:new e.NI}),this.roomId=r.snapshot.params._id,console.log(this.roomId),this.rating3=0,this.form=this.fb.group({rating1:["",e.kI.required],rating2:[4]})}RoomDetails(n){this._roomDetailsService.getRoomById(n).subscribe({next:t=>{this.roomData=t.data,console.log(t),console.log(t.data.room),this.roomImages=t.data.room.images,this.createdBy=t.data.room.createdBy.userName,console.log(this.createdBy),this.roomNumber=t.data.room.roomNumber,console.log(this.roomNumber)},error:t=>{console.log(t)}})}onReviewSubmit(n){console.log(n),this.reviewsForm.value.roomId=this.roomId,this._roomDetailsService.onClickReview(n.value).subscribe({next:t=>{console.log(t)},error:t=>{console.log(t),this._Toastr.error("User has already added a review for this room","Error")},complete:()=>{this._Toastr.success("Rate created successfully")}})}onSubmit(n){console.log(n.value.comment),this.commentForm.value.roomId=this.roomId,this._roomDetailsService.onClickComments(n.value).subscribe({next:t=>{this.roomId=t.roomId,console.log(t)},error:t=>{console.log(t),this._Toastr.error("User has already added a comment for this room","Error")},complete:()=>{this._Toastr.success("Comment created successfully")}})}onBookSubmit(n){console.log(n),this.bookingForm.value.room=this.roomId,this.bookingForm.value.totalPrice=this.roomData.room.price,console.log(this.bookingForm.value),this._roomDetailsService.onClickBooking(this.bookingForm.value).subscribe({next:t=>{this.bookingId=t.data.booking._id,console.log(t)},error:t=>{console.log(t)},complete:()=>{this._Router.navigate(["/landing-page/payment",this.bookingId])}})}ngOnInit(){this.roomId&&this.RoomDetails(this.roomId)}static#o=this.\u0275fac=function(t){return new(t||s)(o.Y36(e.qu),o.Y36(_.w),o.Y36(c.gz),o.Y36(c.F0),o.Y36(b._W))};static#t=this.\u0275cmp=o.Xpm({type:s,selectors:[["app-room-details"]],standalone:!0,features:[o.jDz],decls:173,vars:66,consts:[[1,"booking-page"],[1,"container","mb-5"],[1,"w-60","pt-5","pb-4","d-flex","justify-content-between","align-items-center"],[1,"h5","creatBy","myPointer",3,"routerLink"],[1,"mx-4"],[1,"h5","myPointer"],[1,"text-center"],[1,"dark-blue"],[1,"gray"],[1,"row","justify-content-center","align-items-center","g-3"],[1,"col-lg-7","d-lg-block","col-md-6"],["class","imag-img2 w-100",4,"ngFor","ngForOf"],[1,"container","pt-4"],[1,"row","d-flex","justify-content-between"],[1,"col-md-6"],[1,"side"],[1,"icons","d-flex"],[1,"icon-with-text","px-3"],[1,"material-icons","icon","text-dark-blue"],[1,"text-dark-blue","fw-bold"],[1,"icon-with-text","px-5"],[1,"col-md-5"],[1,"booking-form","border","p-5"],[1,"gray","fw-light"],[1,"text-success"],[1,"text-danger"],[1,"py-5",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-75"],["color","primary",1,"dark-blue","text-center"],["color","",1,"dark-blue",3,"rangePicker"],["formControlName","startDate","matStartDate","","placeholder","Start date","color","primary",1,"dark-blue","w-100"],["formControlName","endDate","matEndDate","","placeholder","End date","color","primary",1,"dark-blue","w-100"],["matIconSuffix","","color","primary",3,"for"],["color","primary"],["rangePicker",""],["color","primary",1,"dark-blue"],["mat-button","","matDateRangePickerCancel","",1,"btn","btn-outline-danger","me-2"],["mat-raised-button","","matDateRangePickerApply","",1,"btn","btn-outline-main"],[1,"w-100"],["type","submit",1,"btn","light-blue","text-white","mt-3"],[1,"container","rating","mt-5","rounded-3","shadow-sm"],[1,"row"],[1,"col-md-6","pe-4"],[1,"pt-2"],[3,"formGroup","ngSubmit"],[1,""],[1,"cont"],[1,"stars","fs-3"],[1,"fs-3"],[1,"fa","fa-star","text-warning","checked"],[1,"fa","fa-star"],[1,"pb-1","m-1","fs-4"],["formControlName","review","rows","5","cols","5",1,"w-100","pb-2","rounded-3","m-3"],[1,"main","w-25","m-3"],[1,"col-md-6","ps-5"],[1,"pb-3","pt-5","m-3","fs-4"],["formControlName","comment","rows","5","cols","5",1,"w-100","pb-2","rounded-3","m-3"],[1,"main","w-25","m-3","float-end"],[1,"clearfix"],[1,"imag-img2","w-100"],["alt","",1,"w-100","h-50","imgHeight1","rounded-4","mb-4",3,"src"]],template:function(t,r){if(1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"span",3),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"span",4),o._uU(8,"/"),o.qZA(),o.TgZ(9,"span",5),o._uU(10),o.ALo(11,"translate"),o.qZA()(),o.TgZ(12,"div",6)(13,"h1",7),o._uU(14),o.qZA(),o.TgZ(15,"p",8),o._uU(16),o.qZA()()(),o.TgZ(17,"div")(18,"div",9)(19,"div",10),o.YNc(20,h,2,1,"div",11),o.qZA()(),o.TgZ(21,"div",12)(22,"div",13)(23,"div",14)(24,"div",15)(25,"p",8),o._uU(26,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sit perspiciatis nesciunt dolorem temporibus molestias officia! Cupiditate molestiae temporibus facere obcaecati voluptate. Impedit odit assumenda reprehenderit adipisci exercitationem id vitae architecto quo dolorum possimus laborum iusto, cumque ipsam et pariatur nobis neque! Maxime, magni. Quam perferendis aliquam expedita nam. Sed!"),o.qZA(),o.TgZ(27,"p",8),o._uU(28,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sit perspiciatis nesciunt dolorem temporibus molestias officia! Cupiditate molestiae temporibus facere obcaecati voluptate. Impedit odit assumenda reprehenderit adipisci exercitationem id vitae architecto quo dolorum possimus laborum iusto, cumque ipsam et pariatur nobis neque! Maxime, magni. Quam perferendis aliquam expedita nam. Sed!"),o.qZA(),o.TgZ(29,"div",16)(30,"div",17)(31,"i",18),o._uU(32,"home"),o.qZA(),o.TgZ(33,"p",8)(34,"span",19),o._uU(35,"2 "),o.qZA(),o._uU(36,"rooms"),o.qZA()(),o.TgZ(37,"div",20)(38,"i",18),o._uU(39,"bed"),o.qZA(),o.TgZ(40,"p",8)(41,"span",19),o._uU(42,"5 "),o.qZA(),o._uU(43,"bedroom"),o.qZA()(),o.TgZ(44,"div",20)(45,"i",18),o._uU(46,"bathroom"),o.qZA(),o.TgZ(47,"p",8)(48,"span",19),o._uU(49,"5 "),o.qZA(),o._uU(50,"bathrooms"),o.qZA()(),o.TgZ(51,"div",20)(52,"i",18),o._uU(53,"dining"),o.qZA(),o.TgZ(54,"p",8)(55,"span",19),o._uU(56,"5 "),o.qZA(),o._uU(57,"dining room"),o.qZA()()(),o.TgZ(58,"div",16)(59,"div",17)(60,"i",18),o._uU(61,"wifi"),o.qZA(),o.TgZ(62,"p",8)(63,"span",19),o._uU(64,"5 "),o.qZA(),o._uU(65,"wifi"),o.qZA()(),o.TgZ(66,"div",20)(67,"i",18),o._uU(68,"work"),o.qZA(),o.TgZ(69,"p",8)(70,"span",19),o._uU(71,"5 "),o.qZA(),o._uU(72,"office"),o.qZA()(),o.TgZ(73,"div",20)(74,"i",18),o._uU(75,"ping"),o.qZA(),o.TgZ(76,"p",8)(77,"span",19),o._uU(78,"5 "),o.qZA(),o._uU(79,"cleaning"),o.qZA()(),o.TgZ(80,"div",20)(81,"i",18),o._uU(82,"shower"),o.qZA(),o.TgZ(83,"p",8)(84,"span",19),o._uU(85,"5 "),o.qZA(),o._uU(86,"spa"),o.qZA()()()()(),o.TgZ(87,"div",21)(88,"div",15)(89,"div",22)(90,"h4",19),o._uU(91),o.ALo(92,"translate"),o.qZA(),o.TgZ(93,"h3",23)(94,"span",24),o._uU(95,"230$ "),o.qZA(),o._uU(96),o.ALo(97,"translate"),o.qZA(),o.TgZ(98,"p",25),o._uU(99),o.ALo(100,"translate"),o.qZA(),o.TgZ(101,"form",26),o.NdJ("ngSubmit",function(){return r.onBookSubmit(r.bookingForm)}),o.TgZ(102,"mat-form-field",27)(103,"mat-label",28),o._uU(104),o.ALo(105,"translate"),o.qZA(),o.TgZ(106,"mat-date-range-input",29),o._UZ(107,"input",30)(108,"input",31),o.qZA(),o._UZ(109,"mat-datepicker-toggle",32),o.TgZ(110,"mat-date-range-picker",33,34)(112,"mat-date-range-picker-actions",35)(113,"button",36),o._uU(114),o.ALo(115,"translate"),o.qZA(),o.TgZ(116,"button",37),o._uU(117),o.ALo(118,"translate"),o.qZA()()()(),o.TgZ(119,"p",8),o._uU(120),o.ALo(121,"translate"),o.TgZ(122,"span",19),o._uU(123),o.ALo(124,"translate"),o.qZA(),o._uU(125),o.ALo(126,"translate"),o.TgZ(127,"span",19),o._uU(128),o.ALo(129,"translate"),o.qZA()(),o.TgZ(130,"div",38)(131,"button",39),o._uU(132),o.ALo(133,"translate"),o.qZA()()()()()()()(),o.TgZ(134,"section")(135,"div",40)(136,"div",41)(137,"div",42)(138,"h3",43),o._uU(139),o.ALo(140,"translate"),o.qZA(),o.TgZ(141,"form",44),o.NdJ("ngSubmit",function(){return r.onReviewSubmit(r.reviewsForm)}),o.TgZ(142,"div",45)(143,"div",46),o._UZ(144,"div",47),o.qZA(),o.TgZ(145,"div",48),o._UZ(146,"span",49)(147,"span",49)(148,"span",49)(149,"span",49)(150,"span",50),o.qZA()(),o.TgZ(151,"label",51),o._uU(152),o.ALo(153,"translate"),o.qZA(),o._UZ(154,"br")(155,"textarea",52),o.TgZ(156,"button",53),o._uU(157),o.ALo(158,"translate"),o.qZA()()(),o.TgZ(159,"div",54)(160,"h3",43),o._uU(161),o.ALo(162,"translate"),o.qZA(),o.TgZ(163,"form",44),o.NdJ("ngSubmit",function(){return r.onSubmit(r.commentForm)}),o.TgZ(164,"label",55),o._uU(165),o.ALo(166,"translate"),o.qZA(),o._UZ(167,"br")(168,"textarea",56),o.TgZ(169,"button",57),o._uU(170),o.ALo(171,"translate"),o.qZA(),o._UZ(172,"div",58),o.qZA()()()()()()()()),2&t){const m=o.MAs(111);o.xp6(4),o.Q6J("routerLink","../../"),o.xp6(1),o.Oqu(o.lcZ(6,28,"nav-home")),o.xp6(5),o.Oqu(o.lcZ(11,30,"room-details")),o.xp6(4),o.Oqu(r.roomNumber),o.xp6(2),o.Oqu(r.createdBy),o.xp6(4),o.Q6J("ngForOf",r.roomImages.slice(0,1)),o.xp6(71),o.Oqu(o.lcZ(92,32,"Start-booking")),o.xp6(5),o.Oqu(o.lcZ(97,34,"padge-paragraph")),o.xp6(3),o.hij("",o.lcZ(100,36,"discount")," 20% "),o.xp6(2),o.Q6J("formGroup",r.bookingForm),o.xp6(3),o.Oqu(o.lcZ(105,38,"Date-title")),o.xp6(2),o.Q6J("rangePicker",m),o.xp6(3),o.Q6J("for",m),o.xp6(5),o.Oqu(o.lcZ(115,40,"cancle-btn")),o.xp6(3),o.Oqu(o.lcZ(118,42,"apply-btn")),o.xp6(3),o.hij("",o.lcZ(121,44,"pay")," "),o.xp6(3),o.hij("480 ",o.lcZ(124,46,"Usd"),""),o.xp6(2),o.hij(" ",o.lcZ(126,48,"per")," "),o.xp6(3),o.hij("2 ",o.lcZ(129,50,"person"),""),o.xp6(4),o.Oqu(o.lcZ(133,52,"book-btn")),o.xp6(7),o.Oqu(o.lcZ(140,54,"rate")),o.xp6(2),o.Q6J("formGroup",r.reviewsForm),o.xp6(11),o.Oqu(o.lcZ(153,56,"message")),o.xp6(5),o.Oqu(o.lcZ(158,58,"rate")),o.xp6(4),o.Oqu(o.lcZ(162,60,"comment")),o.xp6(2),o.Q6J("formGroup",r.commentForm),o.xp6(2),o.Oqu(o.lcZ(166,62,"message")),o.xp6(5),o.Oqu(o.lcZ(171,64,"apply-btn"))}},dependencies:[d.ez,d.sg,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,c.rH,g.m,l.KE,l.hX,l.R9,Z.lW,f.X$,l.lN,a.FA,a.nW,a.wx,a.zY,a.By,a._g,a.M5,a.dp,a.DK,p.XK],styles:[".main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border:aqua;padding:10px 5px;border-radius:5px}input[_ngcontent-%COMP%]{background-color:#f5f6f8!important}.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;border-radius:15px}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;cursor:pointer}.gray[_ngcontent-%COMP%]{color:#ababab}.light-blue[_ngcontent-%COMP%]{background-color:#203fc7}.text-light-blue[_ngcontent-%COMP%]{color:#203fc7}.border-light-blue[_ngcontent-%COMP%]{border:solid 1px rgb(32,63,199)}.card[_ngcontent-%COMP%]{width:500px!important}.font[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.text-dark-blue[_ngcontent-%COMP%]{color:#152c5b}.text-main[_ngcontent-%COMP%]{color:#3252df}.dark-blue[_ngcontent-%COMP%]{color:#152c5b}.btn-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df}.btn-outline-main[_ngcontent-%COMP%]{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.btn-outline-main[_ngcontent-%COMP%]:hover, .btn-outline-main2[_ngcontent-%COMP%]{background-color:transparent;color:#152c5b;border-color:#152c5b}.btn-outline-main2[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3252df;border-color:#3252df;transition:all}.myPointer[_ngcontent-%COMP%]{cursor:pointer}.rating[_ngcontent-%COMP%]{background-color:#fefefeed;border:2px solid rgb(239,239,239);padding:10px 30px}textarea[_ngcontent-%COMP%]{border:solid #3252DF}.w-60[_ngcontent-%COMP%]{width:60%}.imgHeight1[_ngcontent-%COMP%]{height:33rem}.imgHeight2[_ngcontent-%COMP%]{height:16rem}.creatBy[_ngcontent-%COMP%]{color:#b0b0b0;font-family:Poppins,sans-serif;font-weight:300;font-size:18px;line-height:27px;text-align:center}.routerActive[_ngcontent-%COMP%]{color:#3252df}.navbar-text[_ngcontent-%COMP%]{font-size:19px;font-weight:500}.rate[_ngcontent-%COMP%]{border:solid #3252DF;width:60px!important}.cont[_ngcontent-%COMP%]{color:#eee;overflow:hidden}div.stars[_ngcontent-%COMP%]{display:inline-block}"]})}return s})()}}]);