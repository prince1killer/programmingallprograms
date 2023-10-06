<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_addcategory.aspx.cs" Inherits="a_addcategory" %>




<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

  

   <%--Add Category Start--%>
         
        <div class="add_category">

            
            <%--title start--%>
            <div class="title">

                <h4>Add Category</h4>
                <a href="a_addcategory.aspx"><i class="fa fa-arrow-circle-left">Back</i></a>
              
            </div>
            <%--title End--%>

            
            <%--form start--%>
            <div class="form">

                <p>Category</p>
                <asp:TextBox runat="server" class="t1" ID="categorytxt"/>

                <p>Add Category Image</p>
                <asp:FileUpload ID="categoryimg" runat="server" class="t1"/>
                <asp:Image ImageUrl="imageurl" ID="img" class="pimg" runat="server" />

                <p>Status</p>
                <asp:DropDownList runat="server" class="t2" ID="t2">
                    <asp:ListItem Text="Active" />
                    <asp:ListItem Text="DeActive" />
                </asp:DropDownList>

                <br /> <br />
                <%--<a href="#" id="savebtn"> <i class="fa fa-save">Save</i></a>--%> &nbsp;
                <asp:Button  ID="Button1" runat="server"  OnClick="Button1_Click1" Text="Save"  class="save" Width="90px"  />
                
                <asp:Button  ID="Button2" runat="server" Text="Cancel" OnClick="Button2_Click" class="delete"/>
                
                <%--<a href="#" class="cancle">Cancel</a>--%>

                 <br /><br /><br /><br /><br />

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
                <asp:TemplateField HeaderText="Status">

                      <ItemTemplate>
                        
                        <asp:Label Text='<%#Eval("Status") %>' runat="server" />

                    </ItemTemplate>

                </asp:TemplateField>
                <asp:TemplateField HeaderText="Edit">

                      <ItemTemplate>
                        
                        <a href='addcategory.aspx?update=<%#Eval("id") %>'>Edit </a>


                    </ItemTemplate>

                </asp:TemplateField>

                <asp:TemplateField HeaderText="Delete">

                      <ItemTemplate>
                        
                          <a href='addcategory.aspx?delete=<%#Eval("id") %>'>Delete</a>

                    </ItemTemplate>

                </asp:TemplateField>

            </Columns>
        </asp:GridView>

    
                <br />
                <br />


            </div>
            <%--form End--%>

        </div>
    
        <%--Add Category End--%>

    




</asp:Content>

