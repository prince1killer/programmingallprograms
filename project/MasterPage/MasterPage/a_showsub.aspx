<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_showsub.aspx.cs" Inherits="a_showsub" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <div style="height: 200px">
    
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False">
            <Columns>

                <asp:TemplateField HeaderText="Id">

                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("ID") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Category">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("category") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="SubCategory">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("subcategory") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductImage">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("subcategoryimg") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Status">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("status") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
            
                    <asp:TemplateField HeaderText="Customerid">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("cid") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
            

                <asp:TemplateField HeaderText="Edit">
                    
                    <ItemTemplate>

                        <a href='a_addsubcategory.aspx?edit=<%#Eval("id") %>'>Edit</a>
                    
                    </ItemTemplate>

                </asp:TemplateField>
                
                <asp:TemplateField HeaderText="Delete">
                    
                    <ItemTemplate>

                        <a href='a_showsub.aspx?delete=<%#Eval("id") %>'>Delete</a>

                    </ItemTemplate>

                </asp:TemplateField>
            
            </Columns>
        </asp:GridView>
    
    </div>

</asp:Content>

