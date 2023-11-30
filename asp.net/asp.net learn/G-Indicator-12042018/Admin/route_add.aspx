<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="route_add, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-road text-red "></i>Route
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="box-header with-border">
        <h3 class="box-title">Add New Route</h3>
    </div>
    <div class="form">
        <div class="box-body">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">Source City</label>
                        <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged"></asp:DropDownList>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">Destination City</label>
                        <asp:DropDownList ID="DropDownList2" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail3" class="control-label">Distance</label>
                        <span class="text-red">*</span>
                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Distance"></asp:TextBox>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="box-footer">
        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-default" NavigateUrl="~/Admin/Route_grid.aspx">Cancel</asp:HyperLink>
        <asp:Button ID="Button1" runat="server" Text="Add" CssClass="btn btn-danger pull-right" OnClick="Button1_Click" />
    </div>
</asp:Content>

