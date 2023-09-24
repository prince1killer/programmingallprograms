<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="usermaster.aspx.cs" Inherits="Admin_usermaster" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Contenttitle" runat="Server">
            Usermaster

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenttitle2" runat="Server">
            Usermaster

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentButton" runat="Server">
  <%--<a href="catmaster_form.aspx" class="btn btn-info"><i class="fa fa-plus"></i>&nbsp;Add</a>--%>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="ContentPage" runat="Server">
    <div class="panel panel-default">
        <div class="panel-heading">
                                Usermaster
        </div>
        <div class="panel-body">
            <asp:GridView ID="dataGrid" runat="server" CssClass="table table-striped table-bordered table-hover" AutoGenerateColumns="False"  >
                <Columns>
                  <%--  <asp:TemplateField HeaderText="Edit">
                        <ItemTemplate>
                            <a href='catmaster_form.aspx?edit=<%#Eval("catid")%>'>Edit</a>
                        </ItemTemplate>
                      
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Delete">
                      <ItemTemplate >
                          <asp:LinkButton  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("catid") %>'>Delete</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>--%>

                    <asp:TemplateField HeaderText="userid">
                        <ItemTemplate>
                            <%#Eval("userid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="name">
                        <ItemTemplate>
                            <%#Eval("name") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="username">
                        <ItemTemplate>
                            <%#Eval("username") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="password">
                        <ItemTemplate>
                            <%#Eval("password") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="email">
                        <ItemTemplate>
                            <%#Eval("email") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="regdate">
                        <ItemTemplate>
                            <%#Eval("regdate") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  
                </Columns>
            </asp:GridView>
        </div>
        <div class="panel-footer">
        </div>
    </div>
</asp:Content>



