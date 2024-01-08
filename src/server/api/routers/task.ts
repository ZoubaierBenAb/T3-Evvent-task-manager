import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { taskInput } from '../../../types'
export const taskRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.task.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return todos.map(({ id, text, done }) => ({ id, text, done }));
  }),
  create: protectedProcedure.input(taskInput).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.task.create({
      data: {
        content: input,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        }

      }
    })
  }),
  delete: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return ctx.prisma.task.delete({
      where: {
        id: input
      }
    })
  }),
  toggle: protectedProcedure.input(z.object({
    id: z.string(),
    done: z.boolean(),
  })).mutation(async ({ ctx, input:{id,done} }) => {
    return ctx.prisma.task.update({
      where: {
        id,
      },
      data: {
        done,
      }
    })
  })
});
