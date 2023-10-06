using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class a_showsub : System.Web.UI.Page
{
    SqlConnection cn;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select * from addsubcategory", cn);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        GridView1.DataSource = ds;
        GridView1.DataBind();

        if (Request.QueryString["delete"] != null)
        {
            cmd = new SqlCommand("delete from addsubcategory where id=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

            cmd.ExecuteNonQuery();

            Response.Redirect("http://localhost:1235/a_showsub.aspx");
        }

    }
}