<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_showadvertisment.aspx.cs" Inherits="a_showadvertisment" %>

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
                <asp:TemplateField HeaderText="Title">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("title") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Productname">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("productname") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Description">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("description") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Productimage">
                    
                    <ItemTemplate>

                        <asp:Image ImageUrl='<%#Eval("productimage") %>' class="productimg" runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>


                <asp:TemplateField HeaderText="Status">
                    
                    <ItemTemplate>

                        <asp:Label Text='<%#Eval("status") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
            
                <asp:TemplateField HeaderText="Edit">
                    
                    <ItemTemplate>

                        <a href='a_advertisment.aspx?edit=<%#Eval("id") %>'>Edit</a>
                    
                    </ItemTemplate>

                </asp:TemplateField>
                
                <asp:TemplateField HeaderText="Delete">
                    
                    <ItemTemplate>

                        <a href='a_showadvertisment.aspx?delete=<%#Eval("id") %>'>Delete</a>

                    </ItemTemplate>

                </asp:TemplateField>
            
            </Columns>
        </asp:GridView>
    
    </div>

</asp:Content>

