<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_feedback_grid, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <h1><i class="fa fa-edit text-red"></i>Feedback 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
    
    <div class="box-header">
        <h3 class="box-title">Feedback</h3>
        <div class="box-tools pull-right">
            <%--<asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-box-tool" data-widget="New" data-toggle="tooltip" title="Add New"><i class="fa fa-plus"></i></asp:HyperLink>--%>
       
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
            
            <div class="row">
                <div class="col-sm-12">
                    
                    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AutoGenerateColumns="False" CssClass="table table-bordered table-hover dataTable" DataKeyNames="Id" DataSourceID="SqlDataSource1" EmptyDataText="There are no data records to display.">
                        <Columns>
                            <asp:TemplateField ShowHeader="False">
                                
                                <ItemTemplate>
                                    
                                    &nbsp;<asp:LinkButton CssClass="btn btn-danger" ID="LinkButton2" runat="server" CausesValidation="False" CommandName="Delete" Text="Delete"></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" SortExpression="Id" />
                            <asp:BoundField DataField="name" HeaderText="Name" SortExpression="name" />
                            <asp:BoundField DataField="message" HeaderText="Message" SortExpression="message" />
                            <asp:BoundField DataField="date" HeaderText="Date" SortExpression="date" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:gIndicatorConnectionString1 %>" DeleteCommand="DELETE FROM [Feedback_mstr] WHERE [Id] = @Id" InsertCommand="INSERT INTO [Feedback_mstr] ([User_Id], [name], [message], [date]) VALUES (@User_Id, @name, @message, @date)" ProviderName="<%$ ConnectionStrings:gIndicatorConnectionString1.ProviderName %>" SelectCommand="SELECT [Id], [User_Id], [name], [message], [date] FROM [Feedback_mstr]" UpdateCommand="UPDATE [Feedback_mstr] SET [User_Id] = @User_Id, [name] = @name, [message] = @message, [date] = @date WHERE [Id] = @Id">
                        <DeleteParameters>
                            <asp:Parameter Name="Id" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="User_Id" Type="Int32" />
                            <asp:Parameter Name="name" Type="String" />
                            <asp:Parameter Name="message" Type="String" />
                            <asp:Parameter Name="date" Type="String" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="User_Id" Type="Int32" />
                            <asp:Parameter Name="name" Type="String" />
                            <asp:Parameter Name="message" Type="String" />
                            <asp:Parameter Name="date" Type="String" />
                            <asp:Parameter Name="Id" Type="Int32" />
                        </UpdateParameters>
                    </asp:SqlDataSource>
                    
                </div>
            </div>
            
        </div>
    </div>
    <!-- /.box-body -->
</asp:Content>

