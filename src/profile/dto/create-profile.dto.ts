import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  title: string;
  image?: string;
  userId: number;
}
