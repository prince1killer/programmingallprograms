<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Bus_add, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-bus text-red "></i> Bus 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="box-header with-border">
        <h3 class="box-title">Add New Bus </h3>
    </div>
    <div class="form">
        <div class="box-body">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="inputEmail3" class="control-label">Bus Name</label> <span class="text-red">*</span>
                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Bus Name"></asp:TextBox>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">Bus Type</label>
                        <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">Source City</label>
                        <asp:DropDownList ID="DropDownList2" runat="server" CssClass="form-control" AutoPostBack="True" OnSelectedIndexChanged="DropDownList2_SelectedIndexChanged"></asp:DropDownList>
                    </div>
                     <div class="form-group">
                        <label for="inputPassword3" class="control-label">Destination City</label>
                        <asp:DropDownList ID="DropDownList3" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">Start Time</label>
                        <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" placeholder="Start Time"></asp:TextBox>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="control-label">End Time</label>
                        <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" placeholder="End Time"></asp:TextBox>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="box-footer">
        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-default" NavigateUrl="~/Admin/Bus_grid.aspx">Cancel</asp:HyperLink>
        <asp:Button ID="Button1" runat="server" Text="Add" CssClass="btn btn-danger pull-right" OnClick="Button1_Click" />
    </div>
    <!-- /.box-body -->
</asp:Content>

