const mongoose = require('../../config/db')

const CompileError = {
  code : String,
  line : String,
  column : String
}

 const CompileWarning = {
  code : String,
  line : String,
  column : String
 }

 const ExecutionError = {
  code : String,
  line : String,
  column : String
 }

const CompilationSchema = {
  successful_compilation : Boolean,
  compile_date : String,
  numberOfFunctions : String,
  number_characters : String,    
  number_lines : String,
  compilation_errors : [CompileError],    
  warnings : [CompileWarning],
  execution_error: ExecutionError,
  user_name : String,
  local_machine_hostname : String,
  help_examples : [String]
}

const UserSchema = {
  user: String,
  operational_system: String,
  is_online: Boolean,
  portugol_version: String,
  last_use: String,
  ip: String,
  extIp: String,
  compilations: [CompilationSchema]  
}

const User = mongoose.model('User', UserSchema)

module.exports = User
