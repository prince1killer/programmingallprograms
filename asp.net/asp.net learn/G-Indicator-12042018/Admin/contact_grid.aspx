<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_contact_grid, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-phone text-red"></i>Contact 
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">

    <div class="box-header">
        <h3 class="box-title">Contact</h3>
        <div class="box-tools pull-right">
            <%--<asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-box-tool" data-widget="New" data-toggle="tooltip" title="Add New"><i class="fa fa-plus"></i></asp:HyperLink>--%>
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

            <div class="row">
                <div class="col-sm-12">

                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="Id" DataSourceID="SqlDataSource1" EmptyDataText="There are no data records to display." AllowPaging="True" CssClass="table table-bordered table-hover dataTable">
                        <Columns>
                            <asp:TemplateField ShowHeader="False">
                               
                                <ItemTemplate>
                                    &nbsp;<asp:LinkButton ID="LinkButton2" CssClass="btn btn-danger" runat="server" CausesValidation="False" CommandName="Delete" Text="Delete"></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" SortExpression="Id" />
                            <asp:BoundField DataField="name" HeaderText="Name" SortExpression="name" />
                            <asp:TemplateField HeaderText="Email" SortExpression="email">
                                <EditItemTemplate>
                                    <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("email") %>'></asp:TextBox>
                                </EditItemTemplate>
                                <ItemTemplate>
                                    <a href='<%# "mailto:"+Eval("email") %>'><%# Eval("email") %></a>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField DataField="contact" HeaderText="Contact" SortExpression="contact" />
                            <asp:BoundField DataField="message" HeaderText="Message" SortExpression="message" />
                            <asp:BoundField DataField="date" HeaderText="Date" SortExpression="date" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:gIndicatorConnectionString1 %>" DeleteCommand="DELETE FROM [contact_mstr] WHERE [Id] = @Id" InsertCommand="INSERT INTO [contact_mstr] ([name], [email], [contact], [message], [date]) VALUES (@name, @email, @contact, @message, @date)" ProviderName="<%$ ConnectionStrings:gIndicatorConnectionString1.ProviderName %>" SelectCommand="SELECT [Id], [name], [email], [contact], [message], [date] FROM [contact_mstr]" UpdateCommand="UPDATE [contact_mstr] SET [name] = @name, [email] = @email, [contact] = @contact, [message] = @message, [date] = @date WHERE [Id] = @Id">
                        <DeleteParameters>
                            <asp:Parameter Name="Id" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="name" Type="String" />
                            <asp:Parameter Name="email" Type="String" />
                            <asp:Parameter Name="contact" Type="String" />
                            <asp:Parameter Name="message" Type="String" />
                            <asp:Parameter Name="date" Type="String" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="name" Type="String" />
                            <asp:Parameter Name="email" Type="String" />
                            <asp:Parameter Name="contact" Type="String" />
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

