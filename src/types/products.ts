import type { IProduct, ITeacher, ISubject, IClassType } from './api'

export interface IProductMapped
  extends Omit<IProduct, 'teacher_id' | 'subject_id' | 'class_type_id'> {
  teacher: ITeacher | null
  subject: ISubject | null
  classType: IClassType | null
}