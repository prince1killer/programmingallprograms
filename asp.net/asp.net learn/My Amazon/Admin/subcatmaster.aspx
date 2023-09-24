<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="subcatmaster.aspx.cs" Inherits="Admin_subcatmaster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Contenttitle" Runat="Server">
            SubCategory List

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenttitle2" Runat="Server">
            SubCategory List

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentButton" Runat="Server">
  <a href="subcatmaster_form.aspx" class="btn btn-info"><i class="fa fa-plus"></i>&nbsp;Add</a>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="ContentPage" Runat="Server">
    <div class="panel panel-default">
        <div class="panel-heading">
            SubCategory List
        </div>
        <div class="panel-body">
            <asp:GridView ID="dataGrid" runat="server" CssClass="table table-striped table-bordered table-hover" AutoGenerateColumns="False" OnRowCommand="dataGrid_RowCommand" >
                <Columns>
                    <asp:TemplateField HeaderText="Edit">
                        <ItemTemplate>
                            <a href='subcatmaster_form.aspx?edit=<%#Eval("subcatid")%>'>Edit</a>
                        </ItemTemplate>
                      
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Delete">
                      <ItemTemplate >
                          <asp:LinkButton  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("subcatid") %>'>Delete</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="subcatId">
                        <ItemTemplate>
                            <%#Eval("subcatid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="catid">
                        <ItemTemplate>
                            <%#Eval("catid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="subcategory">
                        <ItemTemplate>
                            <%#Eval("subcategory") %>
                        </ItemTemplate>
                    </asp:TemplateField>  
                    <asp:TemplateField HeaderText="Date">
                        <ItemTemplate>
                            <%#Eval("subcatdate") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  
                </Columns>
            </asp:GridView>
        </div>
        <div class="panel-footer">
        </div>
    </div>
</asp:Content>

