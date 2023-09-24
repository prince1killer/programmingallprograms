<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="ordermaster.aspx.cs" Inherits="Admin_ordermaster" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Contenttitle" runat="Server">
            Category Form
        
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenttitle2" runat="Server">
            Category Form

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentButton" runat="Server">
  <%--<a href="catmaster_form.aspx" class="btn btn-info"><i class="fa fa-plus"></i>&nbsp;Add</a>--%>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="ContentPage" runat="Server">
    <div class="panel panel-default">
        <div class="panel-heading">
            Category List
        </div>
        <div class="panel-body">
            <asp:GridView ID="dataGrid" runat="server" CssClass="table table-striped table-bordered table-hover" AutoGenerateColumns="False" >
                <Columns>
                    <%--<asp:TemplateField HeaderText="
                        ">
                        <ItemTemplate>
                            <a href='catmaster_form.aspx?edit=<%#Eval("catid")%>'>Edit</a>
                        </ItemTemplate>
                      
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Delete">
                      <ItemTemplate >
                          <asp:LinkButton  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("catid") %>'>Delete</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>--%>

                    <asp:TemplateField HeaderText="Orderid">
                        <ItemTemplate>
                            <%#Eval("orderid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="userid">
                        <ItemTemplate>
                            <%#Eval("userid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="thirdcatid">
                        <ItemTemplate>
                            <%#Eval("thirdcatid") %>
                        </ItemTemplate>
                    </asp:TemplateField> 
                    <asp:TemplateField HeaderText="orderaddress">
                        <ItemTemplate>
                            <%#Eval("orderaddress") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="orderdate">
                        <ItemTemplate>
                            <%#Eval("orderdate") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  
                </Columns>
            </asp:GridView>
        </div>
        <div class="panel-footer">
        </div>
    </div>
</asp:Content>

