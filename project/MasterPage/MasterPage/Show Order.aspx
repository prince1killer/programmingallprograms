<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="Show Order.aspx.cs" Inherits="Show_Order" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div style="height: 212px">
    
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False">
            <Columns>

                <asp:TemplateField HeaderText="ID">

                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("id") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductId">
                    
                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("productid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Invoice">
                    
                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("invoice") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ClientID">
                    
                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("clientid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Price">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("price") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Qty">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("qty") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ShippingId">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("shippingid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Paymentmode">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("paymentmode") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Paymentstatus">

                     <ItemTemplate>
                           <asp:Label Text='<%#Eval("paymentstatus") %>' runat="server" />
                       
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Receipt">

                     <ItemTemplate>
                        <asp:Image ImageUrl='<%#Eval("receipt") %>' class="productimg" runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Edit">
                    
                    <ItemTemplate>
                        <a href='admin_edit.aspx?edit=<%#Eval("id") %>&cid=<%#Eval("clientid")%>'>Edit</a>
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Delete">
                    
                    <ItemTemplate>
                        <a href='admin_edit.aspx?delete=<%#Eval("id") %>'>Delete</a>
                    </ItemTemplate>

                </asp:TemplateField>
            
            </Columns>
        </asp:GridView>
    
    </div>

</asp:Content>

