using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;

/// <summary>
/// Summary description for DB
/// </summary>
public class DB
{
    private SqlConnection con;
    private SqlDataAdapter da;
    private SqlCommand cmd;
    private SqlDataReader dr;
    private DataSet ds;

	public DB()
	{
        this.connect();
        cmd = new SqlCommand();
        ds = new DataSet();

        //
		// TODO: Add constructor logic here
		//
	}
    private void connect()
    {
        this.con = new SqlConnection(ConfigurationManager.ConnectionStrings["janak"].ToString());
        this.con.Open();
    }
    public DataSet getDataSet(string sql, string tablename)
    {
        da = new SqlDataAdapter(sql, this.con);
        ds = new DataSet();
        da.Fill(ds, tablename);
        return ds;
    }

    public string ExecuteScalar(string sql)
    {
        cmd = new SqlCommand();
        cmd.Connection = this.con;
        cmd.CommandType = CommandType.Text;
        cmd.CommandText = sql;
        string str = cmd.ExecuteScalar().ToString();
        cmd.Cancel();
        return str;
    }

    public void ExecuteNonQuery(string sql)
    {
        cmd.Connection = this.con;
        cmd.CommandType = CommandType.Text;
        cmd.CommandText = sql;
        cmd.ExecuteNonQuery();
        cmd.Cancel();
    }
    public void ExecuteReader(string sql)
    {
        cmd = new SqlCommand();
        cmd.Connection = this.con;
        cmd.CommandType = CommandType.Text;
        cmd.CommandText = sql;
        dr = cmd.ExecuteReader();
    }

    public int maxid(string TabName)
    {
        int uid;
        if (this.ds.Tables[TabName].Rows.Count == 0)
        {
            uid = 1;

        }
        else
        {
            uid = Convert.ToInt16(this.ds.Tables[TabName].Rows[this.ds.Tables[TabName].Rows.Count - 1].ItemArray[0].ToString());
            uid = uid + 1;
        }
        return uid;
    }




}
