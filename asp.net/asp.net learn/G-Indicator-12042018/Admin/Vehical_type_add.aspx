<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Vehical_type_add, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1><i class="fa fa-car text-red "></i> Vehicle Type </h1>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
     <div class="box-header with-border">
        <h3 class="box-title">Add New Vehicle Type</h3>
    </div>
    <div class="form">
        <div class="box-body">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="inputEmail3" class="control-label">Vehicle Type</label> <span class="text-red">*</span>
                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Vehicle Type"></asp:TextBox>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="box-footer">
        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-default" NavigateUrl="~/Admin/vehical_type_grid.aspx">Cancel</asp:HyperLink>
        <asp:Button ID="Button1" runat="server" Text="Add" CssClass="btn btn-danger pull-right" OnClick="Button1_Click" />
    </div>
</asp:Content>

