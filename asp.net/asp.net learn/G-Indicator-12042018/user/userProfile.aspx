<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_userProfile, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="myform">

                    <h3>My Profile</h3>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">

                            <div id="alert_placeholder">
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <asp:Image ID="Image1" runat="server" />
                                    <asp:Panel ID="Panel3" runat="server" Visible="false">
                                        
                                    <div class="file-upload">
                                        <span>Change Image</span>
                                        <asp:FileUpload ID="FileUpload1" runat="server" CssClass="upload" />
                                    </div>
                                   
                                    </asp:Panel>
                                    
                                    <%--<asp:Image ID="Image1" runat="server" />--%>
                                </div>
                                <div class="col-sm-9">
                                    <asp:Panel ID="Panel1" runat="server">
                                        <div class="profileLabel">
                                            <b>Name :</b>
                                            <asp:Label ID="lblnm" runat="server" Text="Name"></asp:Label>
                                        </div>
                                        <div class="profileLabel">
                                            <b>UserName :</b>
                                            <asp:Label ID="lblusername" runat="server" Text="Name"></asp:Label>
                                        </div>
                                         <div class="profileLabel">
                                            <b>Contact :</b>
                                          <asp:Label ID="lblcontact" runat="server" Text="Name" ></asp:Label>
                                        </div>
                                        <div class="profileLabel">
                                            <b>Email :</b>
                                          <asp:Label ID="lblem" runat="server" Text="Name"></asp:Label>
                                        </div>
                                        <div class="profileLabel">
                                            <b>City :</b>
                                         <asp:Label ID="lblct" runat="server" Text="Name"></asp:Label>
                                        </div>
                                        <div class="profileLabel">
                                            <b>Address :</b>
                                        <asp:Label ID="lbladd" runat="server" Text="Name" ></asp:Label>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-sm-6">
                                            </div>
                                            <div class="col-sm-6 text-right">
                                                <asp:Button ID="Button2" runat="server" Text="Edit" CssClass="btn btn-primary btn-block" OnClick="Button2_Click" />
                                            </div>

                                        </div>
                                    </asp:Panel>
                                    <asp:Panel ID="Panel2" runat="server" Visible="false">
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Enter Name"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" placeholder="Enter UserName"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" placeholder="Enter ContactNumber"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox4" runat="server" CssClass="form-control" placeholder="Enter Email"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox5" runat="server" CssClass="form-control" placeholder="Enter City"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox6" runat="server" CssClass="form-control" placeholder="Enter Address"></asp:TextBox>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                            </div>
                                            <div class="col-sm-6 text-right">
                                                <asp:Button ID="Button1" runat="server" Text="Update" CssClass="btn btn-primary btn-block" OnClick="Button1_Click" />
                                            </div>

                                        </div>
                                    </asp:Panel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript">
        function showalert(message, alerttype) {
            $('#alert_placeholder').append('<div id="alertdiv" class="alert ' + alerttype + ' fade in"><a class="close" data-dismiss="alert">×</a><span class="text-center">' + message + '</span></div>')
            setTimeout(function () {
                $("#alertdiv").remove();
            }, 5000);
        }
    </script>
</asp:Content>

