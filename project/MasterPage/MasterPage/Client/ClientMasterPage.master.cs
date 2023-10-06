using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class ClientMasterPage : System.Web.UI.MasterPage
{

    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        if (Session["clientlogin"]==null)
        {
            welcomename.Visible = false; 
            loginlink.Visible = true;
        }
        else
        {
            cmd = new SqlCommand("select * from regclient where id=@id", cn);
            cmd.Parameters.AddWithValue("@id",Session["clientlogin"]);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            welcomename.InnerText = ds.Tables[0].Rows[0]["username"].ToString();

            welcomename.Visible = true;
            loginlink.Visible = false;
        }
    }
}
