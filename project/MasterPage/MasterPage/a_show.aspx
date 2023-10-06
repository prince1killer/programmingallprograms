<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_show.aspx.cs" Inherits="a_show" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div style="height: 245px">
    
        <asp:GridView ID="GridView1" runat="server" Width="400px" AutoGenerateColumns="False">
            <Columns>
                <asp:TemplateField HeaderText="ID">

                    <ItemTemplate>
                        
                        <asp:Label Text='<%#Eval("Id") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Category">

                      <ItemTemplate>
                        
                        <asp:Label Text='<%#Eval("Categoryname") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                 <asp:TemplateField HeaderText="ProductImage">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("CategoryImage") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Status">

                      <ItemTemplate>
                        
                        <asp:Label Text='<%#Eval("Status") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Edit">

                      <ItemTemplate>
                          <a href='a_addcategory.aspx?update=<%#Eval("id") %>'>Edit </a>


                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Delete">

                      <ItemTemplate>
                          <a href='a_show.aspx?delete=<%#Eval("id") %>'>Delete</a>

                    </ItemTemplate>

                </asp:TemplateField>

            </Columns>
        </asp:GridView>

    
    </div>

</asp:Content>

