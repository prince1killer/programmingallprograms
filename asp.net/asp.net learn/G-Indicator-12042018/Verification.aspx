<%@ page title="" language="C#" masterpagefile="~/Comon.master" autoeventwireup="true" inherits="Verification, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <style>
        .reg
        {
            cursor: pointer;
            margin: 10px 0px;
            display: block;
        }
        
        .reg:hover
        {
            color: white;
        }
        
        .reg i
        {
            margin-right: 5px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h3>
        Verification
    </h3>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="col-md-offset-3 col-md-6">
        <div class="myform">
            <div id="alert_placeholder">
            </div>
            <div class="form-group">
                <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required"
                    data-validation-required-message="Please Enter Verification Code." placeholder="Verification"></asp:TextBox>
                <p class="help-block text-danger">
                </p>
            </div>
           
            <div class="row">
                <div class="col-md-6">
                    
                </div>
                <div class="col-md-6 text-right">
                    <asp:Button ID="Button1" runat="server" Text="Verify" CssClass="btn btn-primary btn-block"
                        OnClick="Button1_Click" />
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
    </div>
</asp:Content>
