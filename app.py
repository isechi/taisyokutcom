# coding: utf-8
import sqlite3
from flask import Flask, render_template, request, redirect
app = Flask(__name__) #インスタンス生成



@app.route("/")
def top():
    return render_template('top.html')

@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/seisaku1")
def seisaku1():
    return render_template('seisaku1.html')

@app.route("/seisaku2")
def seisaku2():
    return render_template('seisaku2.html')

@app.route("/tarou")
def tarou():
    return render_template('tarou.html')

@app.route("/seisaku3")
def seisaku3():
    return render_template('seisaku3.html')

@app.route("/seisaku4")
def seisaku4():
    return render_template('seisaku4.html')

@app.route("/seisaku5")
def seisaku5():
    return render_template('seisaku5.html')


# methodsにgetを指定することで、/addがきたときに、ゲットできるようにする
@app.route("/add", methods =["GET"])
def add_get():
    return render_template("add.html")
# POSTメソッドにhtmlからルーティング飛ばされたときの処理
@app.route("/add", methods =["POST"])
def add_post():
    # htmlでtaskと名前のついたフォームに送った中身がpythonの変数taskに格納される
    task = request.form.get("task")
    name = request.form.get("name")
    date = request.form.get("date")
    # DB接続
    conn = sqlite3.connect("flasktest.db")
    c = conn.cursor()
    # インサートするカラムの数がどこにって書かなくても一箇所しかない場合、どこにインサートするかは省略できる
    # 何をが一発でわかる場合は書かなくてオッケー
    # 変数を格納するためには格納する場所に？と書く。これは、もうこういうものだと思って書くw
    # 第二引数として?に入る部分を、指定する。第二引数の項目がひとつであったとしても、タプル型であると認識
    # してもらうために、（task,）←カンマをいれる
    # カラムが二つ以上ある場合は最後にカンマを入れなくて大丈夫！
    c.execute("insert into task values(null,?,?,?)", (name,date,task))
    # 変更を書き込み（インサートを使っているので,selectの場合はいらないけどね）
    conn.commit()
    # db byebye
    c.close()
    return redirect("/list")
@app.route("/list")
def task_list():
    conn = sqlite3.connect("flasktest.db")
    c = conn.cursor()
    # select*でもおk。ただわけわからなくなる？！
    c.execute("select name,date,task from task where task is not null order by id desc limit 10")
    # このままだとタプル型なので、辞書型として送ってあげる
    task_list = []
    # fetchallで全部とってくる
    for row in c.fetchall():
        # ひとつずつ辞書型に追加していく
        task_list.append({"name":row[0], "date":row[1], "task":row[2]})
    c.close()
    print(task_list)
    return render_template("task_list.html", task_list = task_list)




















if __name__ == "__main__":
    # webサーバー立ち上げ
    app.run()
