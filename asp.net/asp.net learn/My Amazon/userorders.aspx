<%@ Page Title="" Language="C#" MasterPageFile="~/clientmaster.master" AutoEventWireup="true" CodeFile="userorders.aspx.cs" Inherits="userorders" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
   <style>
       .panel-body {
    padding: 15px !important;
    overflow: scroll !important;
}
   </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
        <div class="panel-body">

              <asp:GridView ID="dataGrid"  runat="server" CssClass="table table-striped table-bordered table-hover mygridview" AutoGenerateColumns="False" OnRowCommand="dataGrid_RowCommand">
                <Columns>
                     <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderStyle-VerticalAlign="Middle" HeaderText="Delete" HeaderStyle-Width="200">
                      <ItemTemplate >
                          <asp:LinkButton CssClass="btn" style="background:red !important;color:white"  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("orderid") %>'>Cancel Order</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>

                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Order Id">
                        <ItemTemplate>
                            <%#Eval("orderid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Product Name">
                        <ItemTemplate>
                            <%#Eval("thirdcatname") %>
                        </ItemTemplate>
                    </asp:TemplateField>            
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Description" HeaderStyle-Width="200" >
                        <ItemTemplate>
                            <%#Eval("thirdcatdesc") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Price">
                        <ItemTemplate>
                            <%#Eval("thirdcatprice") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Product Image">
                        <ItemTemplate>

                            <asp:Image ID="Image1" ImageUrl='<%#Eval("thirdcatimg") %>' Width="300px" Height="300px" runat="server" />
                            

                        </ItemTemplate>
                    </asp:TemplateField>

                    <asp:TemplateField ItemStyle-VerticalAlign="Middle" HeaderText="Date" HeaderStyle-Width="100">
                        <ItemTemplate>
                            <%#Eval("orderdate") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                  
                </Columns>
            </asp:GridView>

            </div>
   
</asp:Content>

