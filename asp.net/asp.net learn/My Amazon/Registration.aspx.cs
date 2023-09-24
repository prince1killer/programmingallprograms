using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Registration : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {


    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        registratinBal rbal = new registratinBal();
        rbal.name = TextBox1.Text;
        rbal.username = TextBox2.Text;
        rbal.password= TextBox3.Text;
        rbal.email= TextBox4.Text;

        rbal.regdate = Convert.ToDateTime(System.DateTime.Now);

        DAL dal = new DAL();
        int res=dal.registration(rbal);
        if (res==1)
        {
            Response.Write("<script>alert('Registration success...')</script>");
            //Response.Write("<script>alert('Subcategory Successfully Updated...');window.location.href='subcatmaster.aspx'</script>");

        }


    }
}