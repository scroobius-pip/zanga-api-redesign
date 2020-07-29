import { Property } from '../../types/models';
import * as sdk from '../../../generated/sdk';


export default function mapDbPropertyToProperty(datum: sdk.Maybe<{ __typename?: "Property" | undefined; } & { __typename?: "Property" | undefined; } & Pick<sdk.Property, "visits" | "state" | "city" | "expense" | "remainingExpense" | "slug" | "featured" | "description" | "costType" | "costValue" | "bounty" | "title"> & { dbId: string; } & { owner: { __typename?: "User" | undefined; } & Pick<sdk.User, "name" | "phone">; images?: ({ __typename?: "Image" | undefined; } & Pick<sdk.Image, "previewUrl" | "url">)[] | null | undefined; }>): { bounty: number; costValue: number; description: string; expense: number; images: ({ __typename?: "Image" | undefined; } & Pick<sdk.Image, "previewUrl" | "url">)[]; owner: { name: string; phone: string; }; remainingExpense: number; slug: string; state: string; city: string; title: string; visits: number; id: string; costType: sdk.CostType.Sale | "Rent"; featured: boolean; } {
    return {
        bounty: datum?.bounty ?? 0,
        costValue: datum?.costValue ?? 0,
        description: datum?.description ?? '',
        expense: datum?.expense ?? 0,
        images: datum?.images ?? [],
        owner: {
            name: datum?.owner?.name ?? '',
            phone: datum?.owner?.phone ?? ''
        },
        remainingExpense: datum?.remainingExpense ?? 0,
        slug: datum?.slug ?? '',
        state: datum?.state ?? '',
        city: datum?.city ?? '',
        title: datum?.title ?? '',
        visits: datum?.visits ?? 0,
        id: datum?.dbId ?? '',
        costType: datum?.costType ?? 'Rent',
        featured: !!datum?.featured
    };
}
