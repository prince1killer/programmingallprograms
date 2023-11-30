<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Bus_type_add, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1><i class="fa fa-tag text-red "></i> Bus Type
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
      <div class="box-header with-border">
        <h3 class="box-title">Add New Bus Type</h3>
    </div>
    <div class="form">
        <div class="box-body">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="inputEmail3" class="control-label">Bus Type</label> <span class="text-red">*</span>
                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Bus Type"></asp:TextBox>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="box-footer">
        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-default" NavigateUrl="~/Admin/Bus_type_gride.aspx">Cancel</asp:HyperLink>
        <asp:Button ID="Button1" runat="server" Text="Add" CssClass="btn btn-danger pull-right" OnClick="Button1_Click" />
    </div>
</asp:Content>

