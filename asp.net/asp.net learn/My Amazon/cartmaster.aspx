<%@ Page Title="" Language="C#" MasterPageFile="~/clientmaster.master" AutoEventWireup="true" CodeFile="cartmaster.aspx.cs" Inherits="cartmaster" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
   <style>
       .panel-body {
    padding: 15px !important;
    overflow: scroll !important;
}
   </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <h1>  <asp:Label ID="Label1" runat="server" Text="Your Cart is empty...."></asp:Label> </h1>
     <div class="panel-body">
              <asp:GridView ID="dataGrid"  runat="server" CssClass="table table-striped table-bordered table-hover" AutoGenerateColumns="False" OnRowCommand="dataGrid_RowCommand">
                <Columns>
                     <asp:TemplateField ItemStyle-VerticalAlign="Middle"   HeaderText="Delete">
                      <ItemTemplate >
                          <asp:LinkButton  ID="LinkButton1" runat="server" OnClientClick="return confirm('Are You Sure Want to Delete Category?')"  CommandArgument='<%#Eval("cartid") %>'>Delete</asp:LinkButton>
                        </ItemTemplate>  
                    </asp:TemplateField>

                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"  HeaderText="Order Id">
                        <ItemTemplate>
                           #<%#Eval("cartid") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"  HeaderText="Product Name">
                        <ItemTemplate>
                            <%#Eval("thirdcatname") %>
                        </ItemTemplate>
                    </asp:TemplateField>            
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"  HeaderText="Description" HeaderStyle-Width="150">
                        <ItemTemplate>
                            <%#Eval("thirdcatdesc") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"  HeaderText="Price">
                        <ItemTemplate>
                            <%#Eval("thirdcatprice") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"  HeaderText="Product Image">
                        <ItemTemplate>
                            <asp:Image ID="Image1" ImageUrl='<%#Eval("thirdcatimg") %>' Width="280px" Height="250px" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-VerticalAlign="Middle"      HeaderText="Buy..">
                        <ItemTemplate>
                            <a href='Product_view.aspx?edit=<%#Eval("thirdcatid") %>' class="btn" >Buy Now</a>

                            <%--<asp:Button ID="Button1" runat="server" Text="Buy Now"  CssClass="btn"/>--%>

                        </ItemTemplate>
                    </asp:TemplateField>

                   
                  
                </Columns>
            </asp:GridView>

   <</div>
</asp:Content>



