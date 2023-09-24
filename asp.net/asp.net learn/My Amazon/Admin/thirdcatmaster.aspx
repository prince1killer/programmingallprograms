<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="thirdcatmaster.aspx.cs" Inherits="Admin_thirdcatmaster" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Contenttitle" Runat="Server">
            ThirdCategory List

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenttitle2" Runat="Server">
            ThirdCategory List

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentButton" Runat="Server">
  <a href="thirdcatmaster_form.aspx" class="btn btn-info"><i class="fa fa-plus"></i>&nbsp;Add</a>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="ContentPage" Runat="Server">
    <div class="panel panel-default">
        <div class="panel-heading">
            ThirdCategory List
        </div>
        <div class="panel-body">
            <asp:GridView ID="dataGrid" runat="server" CssClass="table table-striped table-bordered table-hover" AutoGenerateColumns="False" OnRowCommand="dataGrid_RowCommand" >
                <Columns>
                    <asp:TemplateField HeaderText="Edit">
                        <ItemTemplate>
                            <a href='thirdcatmaster_form.aspx?edit=<%#Eval("thirdcatid")%>'>Edit</a>
                        </ItemTemplate>
                      
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Delete">
                      <ItemTemplate >
                          <asp:LinkButton  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("thirdcatid") %>'>Delete</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="ThirdcatId">
                        <ItemTemplate>
                            <%#Eval("thirdcatid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Subcatid">
                        <ItemTemplate>
                            <%#Eval("subcatid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="catid">
                        <ItemTemplate>
                            <%#Eval("catid") %>
                        </ItemTemplate>
                    </asp:TemplateField>  
                    <asp:TemplateField HeaderText="thirdcatname">
                        <ItemTemplate>
                            <%#Eval("thirdcatname") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  <asp:TemplateField HeaderText="thirdcatimg">
                        <ItemTemplate>
                            <asp:Image Width="300px" Height="300px" ID="Image1" ImageUrl='<%#Eval("thirdcatimg") %>' runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                  <asp:TemplateField HeaderText="thirdcatdate">
                        <ItemTemplate>
                            <%#Eval("thirdcatprice") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="thirdcatdate">
                        <ItemTemplate>
                            <%#Eval("thirdcatdesc") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="thirdcatdate">
                        <ItemTemplate>
                            <%#Eval("thirdcatdate") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  
                </Columns>
            </asp:GridView>
        </div>
        <div class="panel-footer">
        </div>
    </div>
</asp:Content>

