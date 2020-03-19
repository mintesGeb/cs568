class App extends React.Component {

  state = {
    students: [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 19 },
      { name: 'Jimmy', age: 21 }
    ],
    showStudents: true
  };

  deleteStudent = (index) => {
    const students = [...this.state.students];
    students.splice(index, 1);
    this.setState({ students: students });
  }

  nameChanged = (event, index) => {
    const student = { ...this.state.students[index] };
    student.name = event.target.value;
    const students = [...this.state.students];
    students[index] = student;
    this.setState({ students: students });
  }

  showHideStudents = () => {
    const showStudents = this.state.showStudents;
    this.setState({ showStudents: !showStudents });
  }

  render() {
    let students = null;
    if (this.state.showStudents) {
      students = (
        <div>
          {
            this.state.students.map((item, index) => {
              return <Student
                key={index}
                name={item.name}
                age={item.age}
                myClickHandler={() => this.deleteStudent(index)}
                nameChanged={(event) => { this.nameChanged(event, index) }}
              />
            })
          }
        </div>
      )
    }
    return (
      <div className='App'>
        <h1>My first react app</h1>
        <p>Student List</p>
        <div>
          <button onClick={this.showHideStudents}>Show / Hide Students</button>
        </div>
        {students}
      </div>
    )
  }
}

export default App;
