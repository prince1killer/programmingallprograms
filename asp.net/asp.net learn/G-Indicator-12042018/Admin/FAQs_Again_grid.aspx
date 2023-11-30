<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_FAQs_Again_grid, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-bus text-red "></i>Bus 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">

    <div class="box-header">
        <h3 class="box-title">Bus </h3>
        <div class="box-tools pull-right">
            <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-danger" data-widget="New" data-toggle="tooltip" title="Add New" NavigateUrl="~/Admin/FAQs Again.aspx"><i class="fa fa-plus"></i></asp:HyperLink>

        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

            <div class="row">
                <div class="col-sm-12">
                    



                    <asp:GridView ID="GridView1" CssClass="table table-responsive table-bordered table-hover dataTable" runat="server" AllowPaging="True" 
                        AutoGenerateColumns="False" DataKeyNames="Id" DataSourceID="SqlDataSource1" 
                        EmptyDataText="There are no data records to display.">
                        <Columns>
                            <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                            <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" 
                                SortExpression="Id" />
                            <asp:BoundField DataField="Que" HeaderText="Que" SortExpression="Que" />
                            <asp:BoundField DataField="Ans" HeaderText="Ans" SortExpression="Ans" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:Database1ConnectionString1 %>" 
                        DeleteCommand="DELETE FROM [Faqs_mstr] WHERE [Id] = @Id" 
                        InsertCommand="INSERT INTO [Faqs_mstr] ([Que], [Ans]) VALUES (@Que, @Ans)" 
                        ProviderName="<%$ ConnectionStrings:Database1ConnectionString1.ProviderName %>" 
                        SelectCommand="SELECT [Id], [Que], [Ans] FROM [Faqs_mstr]" 
                        UpdateCommand="UPDATE [Faqs_mstr] SET [Que] = @Que, [Ans] = @Ans WHERE [Id] = @Id">
                        <DeleteParameters>
                            <asp:Parameter Name="Id" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="Que" Type="String" />
                            <asp:Parameter Name="Ans" Type="String" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="Que" Type="String" />
                            <asp:Parameter Name="Ans" Type="String" />
                            <asp:Parameter Name="Id" Type="Int32" />
                        </UpdateParameters>
                    </asp:SqlDataSource>
                    



                </div>
            </div>

        </div>
    </div>
    <!-- /.box-body -->
</asp:Content>