<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_Route_grid, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <h1> <i class="fa fa-road text-red"></i> Route 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
    
    <div class="box-header">
        <h3 class="box-title">Route </h3>
        <div class="box-tools pull-right">
            <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-danger" data-widget="New" data-toggle="tooltip" title="Add New" NavigateUrl="~/Admin/route_add.aspx"><i class="fa fa-plus"></i></asp:HyperLink>
       
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
            
            <div class="row">
                <div class="col-sm-12">
                    <asp:GridView ID="GridView1" runat="server" CssClass="table table-bordered table-hover dataTable" AutoGenerateColumns="False" OnRowCommand="GridView1_RowCommand" >
                        <Columns>
                            <asp:TemplateField HeaderText="Action" ItemStyle-Width="20%">
                                <ItemTemplate>
                                <div class="btn-group">

                                    <asp:Button ID="Button1" runat="server" Text="Edit" CssClass="btn btn-danger" CommandArgument='<%# Eval("Route_id")%>' CommandName="Edit" />

                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="caret"></span>
                                      <%--  <span class="sr-only">Toggle Dropdown</span>--%>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li>
                                            <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Route_id")%>' 
                                             CommandName="DeleteRow" OnClientClick="return confirm('Are you sure?')" >Delete</asp:LinkButton></li>
                                    </ul>
                                </div>
                            </ItemTemplate>
                            </asp:TemplateField>
                         <asp:TemplateField HeaderText="Source City Name" >
                            <ItemTemplate>
                                <asp:Label ID="Label3" runat="server" Text='<%# Eval("source") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                         <asp:TemplateField HeaderText="Destination City Name" >
                            <ItemTemplate>
                                <asp:Label ID="Label4" runat="server" Text='<%# Eval("dest") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                            <asp:TemplateField HeaderText="Distance" >
                            <ItemTemplate>
                                <asp:Label ID="Label5" runat="server" Text='<%# Eval("distance") %>'></asp:Label>
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

