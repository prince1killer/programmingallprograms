<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_city_add, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-map-marker text-red "></i> City
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="box-header with-border">
        <h3 class="box-title">Add New City</h3>
    </div>
    <div class="form">
        <div class="box-body">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="inputEmail3" class="control-label">City Name</label>
                        <span class="text-red">*</span>
                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="City Name"></asp:TextBox>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="box-footer">
        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-default" NavigateUrl="~/Admin/City_grid.aspx">Cancel</asp:HyperLink>
        <asp:Button ID="Button1" runat="server" Text="Add" CssClass="btn btn-danger pull-right" OnClick="Button1_Click" />
    </div>
</asp:Content>

