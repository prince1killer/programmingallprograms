<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Bus_type_gride, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-tag text-red"></i> Bus Type
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="box-header">
        <h3 class="box-title">Bus Type </h3>
        <div class="box-tools pull-right">
            <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-danger" data-widget="New" data-toggle="tooltip" title="Add New" NavigateUrl="~/Admin/Bus_type_add.aspx"><i class="fa fa-plus"></i></asp:HyperLink>
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

            <div class="row">
                <div class="col-sm-12">
                    <asp:GridView ID="GridView1" runat="server" CssClass="table table-bordered table-hover dataTable" AutoGenerateColumns="False" OnRowCommand="GridView1_RowCommand" OnRowDeleting="GridView1_RowDeleting">
                        <Columns>
                            <asp:TemplateField HeaderText="Action" ItemStyle-Width="20%">
                                <ItemTemplate>
                                <div class="btn-group">

                                    <asp:Button ID="Button1" runat="server" Text="Edit" CssClass="btn btn-danger" CommandArgument='<%# Eval("Id")%>' CommandName="Edit" />

                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="caret"></span>
                                      <%--  <span class="sr-only">Toggle Dropdown</span>--%>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li>
                                            <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Id")%>' 
                                             CommandName="DeleteRow" OnClientClick="return confirm('Are you sure?')" >Delete</asp:LinkButton></li>
                                    </ul>
                                </div>
                            </ItemTemplate>
                            </asp:TemplateField>
                         <asp:TemplateField HeaderText="Bus Type" >
                            <ItemTemplate>
                                <asp:Label ID="Label3" runat="server" Text='<%# Eval("Bus_type") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        </Columns>



                    </asp:GridView>
                    
                </div>
            </div>

        </div>
    </div>
    <!-- /.box-body -->
</asp:Content>

