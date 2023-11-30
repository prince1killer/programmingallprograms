<%@ page title="" language="C#" masterpagefile="~/Comon.master" autoeventwireup="true" inherits="FAQs, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h3>FAQ's</h3>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <asp:Repeater  ID="rptdata" runat="server">
            <ItemTemplate>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href='<%#"#collapseOne"+Eval("Id") %>'
                                aria-expanded="true" aria-controls="collapseOne"><%#Eval("Que") %> </a>
                        </h4>
                    </div>
                    <div id='<%#"collapseOne"+Eval("Id") %>' class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <%#Eval("Ans") %>
                        </div>
                    </div>
                </div>
            </ItemTemplate>
        </asp:Repeater>
    </div>
</asp:Content>

