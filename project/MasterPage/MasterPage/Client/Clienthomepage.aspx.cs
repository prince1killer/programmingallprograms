using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Client_Clientcategory : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn=new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\App_Data\ecommerce.mdf;Integrated Security=True");
        
        cn.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from addcategory", cn);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        //rptcat.DataSource = ds;
        //rptcat.DataBind();

        catimgrpt.DataSource = ds;
        catimgrpt.DataBind();

    }
}