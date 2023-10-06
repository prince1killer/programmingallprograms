<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_addshow.aspx.cs" Inherits="a_addshow" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

      <div style="height: 212px">
    
        <asp:GridView ID="grideview1" runat="server" AutoGenerateColumns="False">
            <Columns>

                <asp:TemplateField HeaderText="ID">

                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("id") %>' runat="server" />
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
                <asp:TemplateField HeaderText="ThirdCategory">
                    
                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("thirdcategory") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Brand">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("brand") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductName">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("productname") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductPrice">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("productprice") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductColor">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("productcolor") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="ProductImage">

                     <ItemTemplate>
                         <asp:Image ImageUrl='<%#Eval("productimage") %>' class="productimg" runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Discription">

                     <ItemTemplate>
                        <asp:Label Text='<%#Eval("discription") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Status">
                    
                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("status") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>

                   <asp:TemplateField HeaderText="CID">

                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("cid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>

                   <asp:TemplateField HeaderText="SID">

                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("sid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>

                   <asp:TemplateField HeaderText="TID">

                    <ItemTemplate>
                        <asp:Label Text='<%#Eval("tid") %>' runat="server" />
                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Edit">
                    
                    <ItemTemplate>
                        <a href='a_addproduct.aspx?edit=<%#Eval("id") %>'>Edit</a>
                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Delete">
                    
                    <ItemTemplate>
                        <a href='a_addshow.aspx?delete=<%#Eval("id") %>'>Delete</a>
                    </ItemTemplate>

                </asp:TemplateField>
            
            </Columns>
        </asp:GridView>
    
    </div>

</asp:Content>

