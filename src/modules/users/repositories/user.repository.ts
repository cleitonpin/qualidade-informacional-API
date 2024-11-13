import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/modules/users/schemas/user.schema';
import { CreateUserDTO } from '../dtos/create-user-dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) { }

  async create(user: CreateUserDTO) {
    try {
      const createdUser = await this.userModel.create(user);
      return createdUser.save();
    } catch (error) {
      throw new HttpException(
        {
          status: 400,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async findOne({ id }: { id: string }) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      throw new HttpException(
        {
          status: 404,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async findAll() {
    try {
      const [countMale, countFemale, countOthers, countNot] = await Promise.all(
        [
          this.userModel.countDocuments({ gender: 'Masculino' }).exec(),
          this.userModel.countDocuments({ gender: 'Feminino' }).exec(),
          this.userModel.countDocuments({ gender: 'Outro' }).exec(),
          this.userModel
            .countDocuments({ gender: 'Prefiro não informar' })
            .exec(),
        ],
      );

      const total: number = countMale + countFemale + countOthers + countNot;

      const gendersCount = await this.userModel.aggregate([
        {
          $group: {
            _id: '$gender', // Agrupa por valor do campo "gender"
            count: { $sum: 1 }, // Conta o número de documentos em cada grupo
          },
        },
      ]);
      const ageRangeCount = await this.userModel.aggregate([
        {
          $group: {
            _id: '$ageRange', // Agrupa por valor do campo "gender"
            count: { $sum: 1 }, // Conta o número de documentos em cada grupo
          },
        },
      ]);
      const roleCount = await this.userModel.aggregate([
        {
          $group: {
            _id: '$role', // Agrupa por valor do campo "gender"
            count: { $sum: 1 }, // Conta o número de documentos em cada grupo
          },
        },
      ]);
      const levelEducationCount = await this.userModel.aggregate([
        {
          $group: {
            _id: '$levelEducation', // Agrupa por valor do campo "gender"
            count: { $sum: 1 }, // Conta o número de documentos em cada grupo
          },
        },
      ]);
      const yourStateCount = await this.userModel.aggregate([
        {
          $group: {
            _id: '$yourState', // Agrupa por valor do campo "gender"
            count: { $sum: 1 }, // Conta o número de documentos em cada grupo
          },
        },
      ]);

      return {
        gendersCount,
        ageRangeCount,
        roleCount,
        levelEducationCount,
        yourStateCount,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: 404,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
