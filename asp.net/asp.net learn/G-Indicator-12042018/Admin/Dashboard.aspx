<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Dashboard, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
<style>
.listRightflx { background:#f8f8f8;     border: 1px solid #dfdfdf;     margin: 0 0 15px;     padding: 10px; text-align:center; }
.listRightflx h5{color:#0a3049; font-size: 48px; font-weight: 200; line-height: 70px;}
.listRightflx h5.clr1{ color:#c9060c;}
.listRightflx h5.clr2{ color:#0eb594;}

.listRightflx h4.align_Left{ text-align:left;}
.listRightflx p{ text-align:left; font-size:14px; color:#4c4c4c; margin:20px 0;}
</style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <h1><i class="fa fa-dashboard text-red "></i>Dashboard 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
<div class="panel panel-danger user-section-pading">
  <div class="panel-heading">Dashboard</div>
  <div class="panel-body">
    <div class="row">
      <div class="col-sm-4">
        <div class="listRightflx">
          <h4>Total Buses</h4>
          <h5 id="tbus" runat="server" class="clr1"> 1</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="listRightflx">
          <h4>Total Routes</h4>
          <h5 id="troute" runat="server" class="clr1"> 1</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="listRightflx">
          <h4>Total Contacts</h4>
          <h5 id="tcontact" runat="server" class="clr1"> 1</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="listRightflx">
          <h4>Total Customers</h4>
          <h5 id="tcustomer" runat="server" class="clr1"> 1</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="listRightflx">
          <h4>Total Vehicles</h4>
          <h5 id="tvehicle" runat="server" class="clr1"> 1</h5>
        </div>
      </div>
    </div>
  </div>
</div>

</asp:Content>

